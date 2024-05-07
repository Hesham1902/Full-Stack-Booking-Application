import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInputs } from "../../types";
import { LoginSchema } from "../../utils/schema";
import InputForm from "./InputForm";
import Button from "../utils/Button";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = ({ email, password }) => {
    console.log({ email, password });
    navigate("/");
  };

  const inputsForm = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      register: register("email"),
      error: errors.email,
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

        <Button type="submit" disabled={!isValid} title="Sign in" />
      </form>
    </section>
  );
};

export default LoginForm;
