import { createContext, ReactNode, useState } from "react";
import api from "../api";
import { IReservationContext, Reservation } from "../types";

export const ReservationContext = createContext<IReservationContext | null>(
  null
);

export const ReservationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const fetchReservations = async () => {
    try {
      const response = await api.get("/reservation/my/");
      console.log(response.data);
      setReservations(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <ReservationContext.Provider
      value={{ reservations, setReservations, fetchReservations }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
