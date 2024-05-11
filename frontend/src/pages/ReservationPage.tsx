import { useContext, useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import CancelBigSvg from "../components/utils/svg/CancelBigSvg";
import LocationBigSvg from "../components/utils/svg/LocationBigSvg";

import studio from "/images/studio.png";
import { ReservationContext } from "../context/ReservationContext";
import { IReservationContext, Reservation } from "../types";
import api from "../api";
import { useNavigate } from "react-router-dom";

const ReservationsPage = () => {
  const { reservations, fetchReservations } =
    useContext<IReservationContext>(ReservationContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleCancel = async (reservationId: number) => {
    try {
      const response = await api.delete(
        `/reservation/delete/${reservationId}/`
      );
      if (response.status === 204) {
        // If deletion is successful, refetch reservations
        fetchReservations();
        // Redirect to a success page or display a message
        navigate("/reservation/");
      } else {
        console.error("Failed to cancel reservation");
      }
    } catch (error) {
      setError("Timeover you can't cancel the reservation now!");
      console.error("Error occurred while cancelling reservation:", error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <MainLayout>
      <div className="grid grid-cols-1 gap-6">
        {error && <p className="text-red-800 text-lg text-center">{error}</p>}{" "}
        <div className="mt-16">
          {reservations.length !== 0 ? (
            reservations.map((reservation: Reservation, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg mb-4">
                <h1 className="text-3xl font-semibold">
                  Reservation ID: {reservation.id}
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-28 h-28">
                      <img
                        src={studio}
                        alt="Studio"
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-semibold">
                        {reservation.studio.name}
                      </h2>
                      <p className="text-[#11141A]">
                        Studio Address: {reservation.studio.address}
                      </p>
                      <p className="text-[#11141A]">
                        Booking ref. #: {reservation.id}{" "}
                      </p>
                    </div>
                  </div>
                  <p>Reserved Dates:</p>
                  <ul className="list-disc pl-6">
                    {reservation.reserved_dates.map((date, index) => (
                      <li key={index}>{date}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleCancel(reservation.id)}
                      className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-md"
                    >
                      <CancelBigSvg />
                      <span>Cancel</span>
                    </button>
                    <div className="w-16 h-16 bg-[#F7F8FA] flex justify-center items-center rounded-lg">
                      <LocationBigSvg />
                    </div>
                    <p>Directions</p>
                  </div>
                </div>
                <div className="flex justify-between items-start mt-14 mb-6">
                  <div>
                    <h1 className="text-2xl font-semibold">Number of days</h1>
                    <p>{reservation.reserved_dates.length} days</p>
                  </div>
                  <div>
                    {" "}
                    <p>Total Price: </p>
                    {reservation.total_price}
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <h2 className="text-center text-xl">
              You have no reservations yet{" "}
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="/"
              >
                Home Page
              </a>
            </h2>
          )}
          <div className="mt-8 mb-24">
            <h1 className="text-2xl font-semibold">Cancellation policy</h1>
            <p>Cancel for 15 minutes from reservation time</p>{" "}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ReservationsPage;
