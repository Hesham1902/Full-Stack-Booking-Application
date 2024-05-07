import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Calender from "../components/studio/Calender";
import location from "/images/location.png";

const SelectTimePage = () => {
  return (
    <MainLayout>
      <div className="flex items-center gap-2 text-xs text-[#7F8FA4]">
        <p>Step 2 of 2</p>
      </div>

      <Calender />

      <div className="mt-8 bg-white py-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2 px-4">
          <img src={location} alt="location_img" />
          <div>
            <h3 className="font-semibold text-xl mb-2">Name-Location</h3>
            <p>123 Road, Egypt</p>
          </div>
        </div>

        <hr />

        <div className="px-4">
          <p className="font-semibold">
            Total Days: 4days <br /> Dates: 15-18 May
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <Link
          to="/success"
          className="bg-primary text-white rounded-full py-2 px-8"
        >
          Book
        </Link>
      </div>
    </MainLayout>
  );
};

export default SelectTimePage;
