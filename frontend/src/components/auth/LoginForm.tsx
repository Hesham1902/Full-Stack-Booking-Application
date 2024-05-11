import { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInputs } from "../../types";
import { LoginSchema } from "../../utils/schema";
import InputForm from "./InputForm";
import Button from "../utils/Button";
import api from "../../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { fetchProfile } = useContext<any>(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInputs>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const res = await api.post("/api/token/", data);
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      fetchProfile();
      navigate("/");
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  const inputsForm = [
    {
      label: "Username",
      type: "username",
      name: "username",
      placeholder: "Enter your username",
      register: register("username"),
      error: errors.username,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      register: register("password"),
      error: errors.password,
    },
  ];

  return (
    <section className="w-full md:w-[550px] bg-white p-10 rounded-3xl shadow-[0_4px_35px_0_#00000014]">
      <div className="flex justify-between">
        <div>
          <h5 className="text-xl">
            Welcome to{" "}
            <Link to="/" className="text-primary md:text-black font-medium">
              TDS
            </Link>
          </h5>
          <h1 className="text-5xl font-medium mt-4">Sign in</h1>
        </div>

        <div className="flex flex-col">
          <span>No Account ?</span>
          <Link to="/register" className="text-primary">
            Sign up
          </Link>
        </div>
      </div>

      <form
        className="mt-12 flex flex-col gap-4"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputsForm.map((input, index) => (
          <Fragment key={index}>
            <InputForm {...input} />
          </Fragment>
        ))}

        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <Button type="submit" disabled={!isValid} title="Sign in" />
      </form>
    </section>
  );
};

export default LoginForm;
