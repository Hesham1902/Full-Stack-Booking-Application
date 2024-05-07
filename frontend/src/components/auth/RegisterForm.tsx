import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterInputs } from "../../types";
import { RegisterSchema } from "../../utils/schema";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import Button from "../utils/Button";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("user");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterInputs>({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      user_type: userType,
    },
    mode: "all",
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterInputs> = ({
    full_name,
    email,
    password,
  }) => {
    console.log({ full_name, email, password, user_type: userType });
    navigate("/login");
  };

  const inputsForm = [
    {
      label: "Full Name",
      type: "text",
      name: "full_name",
      placeholder: "Enter your full name",
      register: register("full_name"),
      error: errors.full_name,
    },
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
    {
      label: "Confirm Password",
      type: "password",
      name: "confirm_password",
      placeholder: "Confirm your password",
      register: register("confirm_password"),
      error: errors.confirm_password,
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
          <h1 className="text-5xl font-medium mt-4">Sign up</h1>
        </div>

        <div className="flex flex-col">
          <span>Have an Account ?</span>
          <Link to="/login" className="text-primary">
            Sign in
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

        <SelectForm userType={userType} setUserType={setUserType} />

        <Button type="submit" disabled={!isValid} title="Sign up" />
      </form>
    </section>
  );
};

export default RegisterForm;
