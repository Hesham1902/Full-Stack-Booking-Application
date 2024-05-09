import { Dispatch, SetStateAction } from "react";

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
export interface IReservationContext {
  reservations: Reservation[];
  setReservations: Dispatch<SetStateAction<Reservation[]>>;
  fetchReservations: () => Promise<void>;
}

export interface Reservation {
  id: number;
  studio: studio;
  reserved_dates: string[];
  total_price: string;
  created_at: string;
  user: number;
}

export interface UserData {
  id: number;
  email: string;
  username: string;
  user_type: string;
}

export { type RegisterInputs, type LoginInputs };
