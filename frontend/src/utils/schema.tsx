import * as yup from "yup";

export const RegisterSchema = yup.object({
  username: yup.string().required("username is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  user_type: yup.string().required("User type is required"),
});

export const LoginSchema = yup.object({
  username: yup.string().required("username is required"),
  password: yup.string().required("Password is required"),
});
