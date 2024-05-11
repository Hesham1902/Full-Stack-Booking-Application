import { createContext, useState } from "react";
import api from "../api";

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userData, setUserData] = useState("user");

  const fetchProfile = async () => {
    try {
      const response = await api.get("/auth/profile");
      console.log(response.data);
      setUserData(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, fetchProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
