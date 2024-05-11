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

export const StudioSchema = yup.object({
  name: yup.string().required("Name is required"),
  start_time: yup.string().required("Start time is required"),
  end_time: yup.string().required("End time is required"),
  price_per_day: yup.number().required("Price per day is required"),
  working_days: yup.string().required("Working days is required"),
  address: yup.string().required("Address is required"),
});
