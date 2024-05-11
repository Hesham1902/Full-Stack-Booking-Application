import { useContext, useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import CancelBigSvg from "../components/utils/svg/CancelBigSvg";
import LocationBigSvg from "../components/utils/svg/LocationBigSvg";
import check from "/images/check.png";
import studioImg from "/images/studio.png";
import { AuthContext } from "../context/AuthContext";
import { ReservationContext } from "../context/ReservationContext";
import { Reservation } from "../types";
import SuccessCard from "../components/Succes/SuccessCard";

const SuccessPage = () => {
  const { userData } = useContext<any>(AuthContext);
  const { reservations, fetchReservations } =
    useContext<any>(ReservationContext);
  const [studio, setStudio] = useState();

  useEffect(() => {
    fetchReservations();
    console.log(reservations);
  }, []);

  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6">
        <div className="flex flex-col gap-6">
          <SuccessCard label="Upcoming appointments" />
          <SuccessCard label="Past appointments" />
        </div>
        <div className="mt-16">
          {reservations.map((reservation: Reservation, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg mb-6">
              <h1 className="text-3xl font-semibold">
                Reservation ID: {reservation.id}
              </h1>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-28 h-28">
                    <img
                      src={studioImg}
                      alt="Studio"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">{reservation.studio.name}</h2>
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
                  <button className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-md">
                    <CancelBigSvg />
                    <span>Cancel</span>
                  </button>
                  <div className="w-16 h-16 bg-[#F7F8FA] flex justify-center items-center rounded-lg">
                    <LocationBigSvg />
                  </div>
                  <p>Directions</p>
                </div>
                <div className="p-2 pr-3 bg-[#2EC114] text-white w-fit rounded-full flex items-center gap-1">
                  <img src={check} alt="check" />
                  <p className="font-semibold">Confirmed</p>
                </div>
              </div>
              <div className="flex justify-between items-start mt-14 mb-6">
                <div>
                  <h1 className="text-2xl font-semibold">Number of days</h1>
                  <p>{reservation.reserved_dates.length} days</p>
                </div>
                <div>{reservation.total_price}</div>
              </div>
              <hr />
            </div>
          ))}
          <div className="mt-8 mb-24">
            <h1 className="text-2xl font-semibold">Cancellation policy</h1>
            <p>Cancel for 15 minutes from reservation time</p>{" "}
            {/* Static cancellation policy */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SuccessPage;
