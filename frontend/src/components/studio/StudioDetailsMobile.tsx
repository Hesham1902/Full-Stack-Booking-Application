import { Link } from "react-router-dom";
import ArrowLeftSvg from "../utils/svg/ArrowLeftSvg";
import studio5 from "/images/studio5.png";
import StudioImgSlider from "./StudioImgSlider";

const StudioDetailsMobile = () => {
  return (
    <div className="md:hidden">
      <div className="relative">
        <div className="-translate-y-5 after:absolute after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:top-0 after:left-0 after:z-10 after:block">
          <img
            src={studio5}
            alt="studio"
            className="relative block w-full h-full"
          />
          <div className="text-white absolute bottom-8 left-6 z-20">
            <h2 className="text-2xl font-semibold">Name</h2>
            <p>EG 1,000</p>
          </div>

          <p className="absolute bottom-8 right-6 z-20 text-white">Available</p>
        </div>
        <button className="absolute top-8 left-6 w-10 h-10 bg-white rounded-full flex justify-center items-center">
          <ArrowLeftSvg />
        </button>
      </div>

      <div className="container mb-28">
        <h2 className="text-2xl font-semibold">Location</h2>
        <p>
          1st Floor, sample Mall, 1234, 12th Main Rd, sample, Cairo, Egypt{" "}
          <br />
          <Link to="/" className="text-[#322A7D] font-medium mt-1 block">
            Get directions
          </Link>
        </p>

        <div className="mt-6">
          <StudioImgSlider />
        </div>
        <div className="w-full bg-white p-4 fixed bottom-0 left-0 z-50">
          <Link
            to="/select-time"
            className="w-full bg-primary text-white py-4 block text-center"
          >
            Book Studio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudioDetailsMobile;
