import { Link } from "react-router-dom";
import LocationSvg from "../utils/svg/LocationSvg";
import StarSvg from "../utils/svg/StarSvg";
import TimeSvg from "../utils/svg/TimeSvg";
import { IStudioDets } from "../../pages/StudioDetailsPage";

const StudioInfo = ({ studioDets }: { studioDets: IStudioDets }) => {
  return (
    <div className="bg-white py-8 px-6 rounded-xl mt-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-4">{studioDets.name}</h2>
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
              <span className="text-[#FFA101]">
                {studioDets.status ? "Open" : "Closed"}
              </span>{" "}
              - Opens soon at {studioDets.start_time}
            </p>
          </div>
        </div>

        <Link
          to="/select-time"
          className="bg-primary text-white font-medium py-2 px-8 rounded-full"
          state={{ studioDets }}
        >
          Book now
        </Link>
      </div>
      <hr />

      <div className="flex gap-4 mt-4">
        <div className="flex gap-3">
          <LocationSvg />
          <p>
            <br />
            {studioDets.address}
          </p>
        </div>
        <div className="flex gap-4">
          <TimeSvg />
          <p>
            {studioDets.working_days.split(",").map((day, index) => (
              <span key={index}>
                {day}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <p>
            Closed <br /> {studioDets.start_time} am - {studioDets.end_time} pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudioInfo;
