import { useNavigate } from "react-router-dom";
import LocationSvg from "../utils/svg/LocationSvg";

interface StudioCardProps {
  img: string;
  title: string;
  location: string;
  path: string;
  price_per_day: string;
  start_time: string;
  end_time: string;
  owner_id: number;
}

const HomeStudioCard = ({ img, title, location, path }: StudioCardProps) => {
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
        <div className="flex items-center mt-6">
          <LocationSvg />
          <p className="text-gray-700 py-2 ml-2">{location}</p>
        </div>
        <div className="flex mt-4">
          <button
            type="button"
            className="bg-primary hover:bg-primary-100 text-white font-medium py-2 px-4 rounded-full mr-3 transition-colors duration-300"
            onClick={handleClick}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeStudioCard;
