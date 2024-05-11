import moment from "moment";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { studio } from "../../types";

interface CalendarProps {
  studio: studio;
}

const Calender = ({ studio }: CalendarProps) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [arrDates, setArrDate] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null); // Adjusted error state to hold string or null
  const navigate = useNavigate();

  const handleDate = () => {
    const start = moment(state[0].startDate).format("YYYY-MM-DD");
    const end = moment(state[0].endDate).format("YYYY-MM-DD");

    const startDate = moment(start);
    const endDate = moment(end);

    const datesArray = [];

    while (startDate.isSameOrBefore(endDate)) {
      datesArray.push({
        year: startDate.year(),
        month: startDate.month() + 1,
        day: startDate.date(),
      });
      startDate.add(1, "days");
    }

    const datesFormat: string[] = datesArray.map(
      (date) => `${date.year}-${date.month}-${date.day}`
    );

    setArrDate(datesFormat);

    bookSelectedDates(arrDates);
  };

  const bookSelectedDates = async (dates: string[]) => {
    try {
      const response = await api.post("reservation/create/", {
        studio: studio.id,
        reserved_dates: dates,
      });

      if (response.status === 201) {
        navigate("/success");
        console.log("Booking request sent successfully:", response.data);
      } else {
        setError(response.data);
        throw new Error(response.data);
      }
    } catch (error) {
      setError(
        `Sorry, This day is not available this the available days: 
        ${studio.working_days}`
      );
      console.error("Error while sending booking request:", error);
    }
  };

  return (
    <div className="text-center mt-8">
      {error && <p className="text-red-800">{error}</p>}{" "}
      <DateRange
        editableDateInputs={true}
        onChange={(item: any) => setState([item.selection])}
        moveRangeOnFirstSelection={true}
        ranges={state}
      />
      <button
        className="bg-primary text-white rounded-lg block py-2 px-4 mx-auto mt-4"
        onClick={handleDate}
      >
        Book
      </button>
    </div>
  );
};

export default Calender;
