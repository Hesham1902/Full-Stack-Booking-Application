import { Link, useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import GalleryImgStudio from "../components/studio/GalleryImgStudio";
import StudioInfo from "../components/studio/StudioInfo";
import StudioDetailsMobile from "../components/studio/StudioDetailsMobile";
import { useEffect, useState } from "react";
import api from "../api";

export interface IStudioDets {
  id: number;
  name: string;
  title: string;
  address: string;
  path: string;
  price_per_day: string;
  start_time: string;
  end_time: string;
  status: boolean;
  working_days: string;
}

function StudioDetailsPage() {
  const { id } = useParams();

  const [studioDets, setStudioDets] = useState<IStudioDets>({
    id: 0,
    name: "",
    title: "",
    address: "",
    path: "",
    price_per_day: "",
    start_time: "",
    end_time: "",
    status: false,
    working_days: "",
  });

  useEffect(() => {
    const fetchStudioDetails = async () => {
      try {
        const response = await api.get(`studio/api/v1/${id}`);
        setStudioDets(response.data);
      } catch (error) {
        console.error("Error fetching studio details:", error);
      }
    };
    fetchStudioDetails();
  }, [id]);
  return (
    <>
      <div className="hidden md:block">
        <MainLayout>
          <div className="flex items-center gap-2 text-xs text-[#7F8FA4]">
            <Link to="/">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7F8FA4]"></span>
            <p>{studioDets?.name}</p>
          </div>

          <GalleryImgStudio />
          <StudioInfo studioDets={studioDets} />
        </MainLayout>
      </div>

      <StudioDetailsMobile />
    </>
  );
}

export default StudioDetailsPage;
