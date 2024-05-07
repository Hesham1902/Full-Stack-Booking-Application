interface RegisterInputs {
  full_name: string;
  email: string;
  password: string;
  confirm_password: string;
  user_type: string;
}

interface LoginInputs {
  email: string;
  password: string;
}

export { type RegisterInputs, type LoginInputs };
