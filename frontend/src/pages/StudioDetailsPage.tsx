import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import GalleryImgStudio from "../components/studio/GalleryImgStudio";
import StudioInfo from "../components/studio/StudioInfo";
import StudioDetailsMobile from "../components/studio/StudioDetailsMobile";

function StudioDetailsPage() {
  return (
    <>
      <div className="hidden md:block">
        <MainLayout>
          <div className="flex items-center gap-2 text-xs text-[#7F8FA4]">
            <Link to="/">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7F8FA4]"></span>
            <p>Studio Name</p>
          </div>

          <GalleryImgStudio />

          <StudioInfo />
        </MainLayout>
      </div>

      <StudioDetailsMobile />
    </>
  );
}

export default StudioDetailsPage;
