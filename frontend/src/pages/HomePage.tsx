import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import StudioList from "../components/studio/StudioList";

const HomePage = () => {
  return (
    <MainLayout>
      <h2 className="text-3xl font-semibold hidden lg:block">Home</h2>
      <div className="flex items-center lg:hidden w-full">
        <h2 className="text-3xl font-semibold text-primary mx-auto">
          Choose a Studio
        </h2>
        <Link to="/" className="text-right">
          View all
        </Link>
      </div>

      <StudioList />
    </MainLayout>
  );
};

export default HomePage;
