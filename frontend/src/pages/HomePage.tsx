import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import StudioList from "../components/studio/StudioList";
import { useEffect, useState } from "react";
import api from "../api";

const HomePage = () => {
  const [studios, setStudios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudios = async () => {
    try {
      const response = await api.get("studio/api/v1/all");
      setStudios(response.data);
      setLoading(false);
    } catch (error: any) {
      setError(error?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudios();
  }, []);

  return (
    <MainLayout>
      <h2 className="text-3xl font-semibold hidden lg:block">Home</h2>
      <div className="flex items-center lg w-full lg:hidden">
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
        <p>Error: {error}</p>
      ) : (
        <StudioList studios={studios} />
      )}
    </MainLayout>
  );
};

export default HomePage;
