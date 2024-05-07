interface RegisterInputs {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  user_type: string;
}

interface LoginInputs {
  username: string;
  password: string;
}

export { type RegisterInputs, type LoginInputs };
