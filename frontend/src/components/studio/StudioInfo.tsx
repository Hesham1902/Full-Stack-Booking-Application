import { Link } from "react-router-dom";
import LocationSvg from "../utils/svg/LocationSvg";
import StarSvg from "../utils/svg/StarSvg";
import TimeSvg from "../utils/svg/TimeSvg";

const StudioInfo = () => {
  return (
    <div className="bg-white py-8 px-6 rounded-xl mt-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Studio name</h2>
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="font-medium">5.0</span>
            <div className="flex gap-0.5">
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7F8FA4]"></span>
            <p>
              <span className="text-[#FFA101]">Closed</span> opens soon at
              9:00am
            </p>
          </div>
        </div>

        <Link
          to="/select-time"
          className="bg-primary text-white font-medium py-2 px-8 rounded-full"
        >
          Book now
        </Link>
      </div>
      <hr />

      <div className="flex gap-4 mt-4">
        <div className="flex gap-3">
          <LocationSvg />
          <p>
            1st Floor, sample Mall, 1234, 12th Main Rd, <br /> sample, Cairo,
            Egypt Get directions
          </p>
        </div>
        <div className="flex gap-4">
          <TimeSvg />
          <p>
            Mon <br /> Tue - Sun
          </p>
        </div>
        <div>
          <p>
            Closed <br /> 10:00 am - 07:30 pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudioInfo;
