import { Link, useNavigate } from "react-router-dom";
import logo from "/images/logo.svg";
import profile from "/images/profile.png";
import { useContext, useEffect, useState } from "react";
import MenuSvg from "../utils/svg/MenuSvg";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";
import SearchInput from "../utils/SearchInput";

const Header: React.FC = ({ setSearchValue }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const [userType, setUserType] = useState<string | null>(null);

  const { userData, fetchProfile } = useContext<any>(AuthContext);

  const accessToken: string | null = localStorage.getItem(ACCESS_TOKEN);
  useEffect(() => {
    if (accessToken) {
      fetchProfile();
      setIsAuthenticated(true);
    }
  }, [accessToken]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);

      if (!refreshToken) {
        console.warn(
          "Refresh token not found in localStorage. Skipping logout."
        );
        return;
      }

      const response = await api.post("auth/api/logout/", {
        refresh_token: refreshToken,
      });

      if (response.data.error) {
        console.error("Logout failed with status:", response.status);
      } else {
        console.log("Logout successful.");
      }

      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <header className="bg-white sticky top-0 w-full py-5 shadow-md z-50">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="items-center gap-6 hidden lg:flex">
            <Link to="/">
              <img src={logo} alt="logo" className="w-24" />
            </Link>
            <SearchInput />
          </div>
          <div className="flex flex-row-reverse lg:flex-row justify-between items-center lg:gap-10 w-full lg:w-auto relative">
            {!isAuthenticated ? (
              <div className="flex gap-10">
                <Link to="/login" className="font-bold">
                  Login
                </Link>
                <Link to="/register" className="font-bold">
                  Sign Up
                </Link>
              </div>
            ) : (
              <>
                <div className="w-14 h-14">
                  <img src={profile} alt="profile" className="w-full" />
                </div>
                {userData.user_type === "studio_owner" && (
                  <div>
                    <Link
                      to="/add-studio"
                      className="bg-primary text-white py-2 px-5 rounded-xl"
                    >
                      Add studio
                    </Link>
                  </div>
                )}
              </>
            )}

            <button type="button" onClick={handleMenuClick}>
              <MenuSvg />
            </button>
            {isMenuOpen && isAuthenticated && (
              <div className="absolute mt-12 top-4 right-0 ml-16 bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="py-1">
                  {(userData.user_type === "admin" ||
                    userData.user_type === "studio_owner") && (
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  )}
                  {userData.user_type === "user" && (
                    <Link
                      to="/reservations"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Reservations
                    </Link>
                  )}

                  <button
                    className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
