import { useNavigate } from "react-router-dom";
import LocationSvg from "../utils/svg/LocationSvg";

interface StudioCardProps {
  img: string;
  title: string;
  location: string;
  path: string;
}

const StudioCard = ({ img, title, location, path }: StudioCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/studios/${path}`);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-5 text-2xl font-medium">{title}</h5>
        </a>
        <hr />
        <div className="grid grid-cols-[35px_1fr_1fr] items-start mt-4">
          <LocationSvg />

          <p className="text-gray-700">{location}</p>

          <button
            type="button"
            className="bg-primary text-white font-medium py-2 px-4 rounded-full"
            onClick={handleClick}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudioCard;
