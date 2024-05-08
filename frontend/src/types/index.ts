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

export interface studio {
  id: number;
  name: string;
  working_days: string;
  start_time: string;
  end_time: string;
  price_per_day: string;
  address: string;
  rate: number;
  status: boolean;
  owner_id: number;
}

export interface Reservation {
  id: number;
  studio_id: number;
  reserved_dates: string[];
}

export interface UserData {
  id: number;
  email: string;
  username: string;
  user_type: string;
}

export { type RegisterInputs, type LoginInputs };
