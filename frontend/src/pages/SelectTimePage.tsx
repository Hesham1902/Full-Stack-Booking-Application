import { useLocation } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Calender from "../components/studio/Calender";
import location from "/images/location.png";
import { IStudioDets } from "./StudioDetailsPage";
import api from "../api";
import { useState } from "react";

const SelectTimePage = () => {
  const locat = useLocation();
  const studioDets: IStudioDets = locat.state.studioDets;
  console.log(studioDets);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [bookingError, setBookingError] = useState<string>("");

  const handleBookNow = async () => {
    try {
      // Prepare data for booking request
      const bookingData = {
        studio: studioDets.id,
        reserved_dates: selectedDates.map(
          (date) => date.toISOString().split("T")[0]
        ),
      };
      console.log(selectedDates);
      // Make booking request to your backend API
      const response = await api.post("/bookings", bookingData);

      // Redirect to success page upon successful booking
      history.push("/success");
    } catch (error) {
      // Handle booking error
      setBookingError("Failed to book. Please try again.");
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center gap-2 text-xs text-[#7F8FA4]">
        <p>Step 2 of 2</p>
      </div>

      <Calender onChange={handleBookNow} />
      <div className="mt-8 bg-white py-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2 px-4">
          <img src={location} alt="location_img" />
          <div>
            <h3 className="font-semibold text-xl mb-2">{studioDets.name}</h3>
            <p>{studioDets.address}</p>
          </div>
        </div>

        <hr />

        <div className="px-4">
          <p className="font-semibold">
            Total Days: {studioDets.working_days.split(",").length} <br />
            Price Per Day: {studioDets.price_per_day} <br />
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={handleBookNow}
          className="bg-primary text-white rounded-full py-2 px-8"
        >
          Book
        </button>
      </div>

      {bookingError && <p className="text-red-500">{bookingError}</p>}
    </MainLayout>
  );
};

export default SelectTimePage;
