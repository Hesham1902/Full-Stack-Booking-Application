import { useLocation } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Calender from "../components/studio/Calender";
import location from "/images/location.png";
import { studio } from "../types";

const SelectTimePage = () => {
  const locat = useLocation();
  const studioDets: studio = locat.state.studioDets;

  return (
    <MainLayout>
      <div className="flex items-center gap-2 text-xs text-[#7F8FA4]">
        <p>Step 2 of 2</p>
      </div>

      <Calender studio={studioDets} />
      <div className="mt-8 bg-white py-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2 px-4">
          <img src={location} alt="location_img" />
          <div>
            <h3 className="font-semibold text-xl mb-2">{studioDets.name}</h3>
            <p>{studioDets.address}</p>
          </div>
        </div>

        <hr />

        <div className="px-4 p-6">
          <p className="font-semibold p-4">
            Days available in the week:{" "}
            {studioDets.working_days.split(",").length} <br />
            Working Days: {studioDets.working_days} Only <br />
            Price Per Day: {studioDets.price_per_day} <br />
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default SelectTimePage;
