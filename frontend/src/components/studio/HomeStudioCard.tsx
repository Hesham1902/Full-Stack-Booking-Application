import { useNavigate } from "react-router-dom";
import LocationSvg from "../utils/svg/LocationSvg";
import api from "../../api";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

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

const HomeStudioCard = ({
  img,
  title,
  location,
  path,
  owner_id,
}: StudioCardProps) => {
  const navigate = useNavigate();

  const { userData } = useContext(AuthContext);

  const handleClick = () => {
    navigate(`/studios/${path}`);
  };

  const isOwner =
    (userData.id === owner_id && userData.user_type === "studio_owner") ||
    userData.user_type === "admin";

  const handleDeleteClick = async () => {
    try {
      // Make an API call to delete the studio
      await api.delete(`studio/api/v1/delete/${path}`);
      // Log message to indicate successful deletion
      console.log(`Studio with ID ${path} deleted successfully.`);
      // You may also want to update the UI to reflect the deletion
    } catch (error) {
      console.error("Error deleting studio:", error);
      // Handle error, such as displaying a notification to the user
    }
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