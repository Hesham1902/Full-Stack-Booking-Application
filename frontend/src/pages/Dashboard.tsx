import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import OwnerStudioList from "../components/studio/OwnerStudioList";
import { useContext, useEffect, useState } from "react";
import api from "../api";
import { ACCESS_TOKEN } from "../constants";
import { AuthContext } from "../context/AuthContext";
import { studio, UserData } from "../types";

const Dashboard = () => {
  const [studios, setStudios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userData }: { userData: UserData } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudios = async () => {
      try {
        let response;
        if (userData.user_type === "studio_owner") {
          response = await api.get("studio/api/v1/user/");
        } else {
          response = await api.get("studio/api/v1/all/");
        }
        setStudios(response.data);
        setLoading(false);
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
          navigate("/login");
        }
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchStudios();
  }, [userData.user_type, navigate]);

  const handleDelete = async (studioId: number) => {
    try {
      await api.delete(`studio/api/v1/delete/${studioId}`);
      setStudios((prevStudios) =>
        prevStudios.filter((studio: studio) => studio.id !== studioId)
      );
      console.log(`Studio with ID ${studioId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting studio:", error);
    }
  };

  return (
    <MainLayout>
      <h2 className="text-3xl font-semibold hidden lg:block">Dashboard</h2>
      <div className="flex items-center lg:hidden w-full">
        <h2 className="text-3xl font-semibold text-primary mx-auto">
          Choose a Studio
        </h2>
        <Link to="/" className="text-right">
          View all
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {JSON.stringify(error)}</p>
      ) : (
        <>
          <OwnerStudioList studios={studios} onDelete={handleDelete} />
        </>
      )}
    </MainLayout>
  );
};

export default Dashboard;
