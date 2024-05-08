import { useEffect, useState } from "react";
import api from "../../api";
import { Reservation } from "../../types";

const UserReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState<string | null>(null); // Specify the error type as string | null

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await api.get("reservation/my/");
      console.log(response.data);
      setReservations(response.data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      setError(error.message || "An error occurred.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center lg:place-items-start gap-8 mt-8">
      <h2>Reservations</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : reservations.length === 0 ? (
        <p>You don't have any reservations yet.</p>
      ) : (
        // Render your list of reservations here (assuming reservations is an array of objects)
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              {reservation.reserved_dates} - {reservation.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserReservations;
