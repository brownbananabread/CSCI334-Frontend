import { Navigate, Outlet } from "react-router";
import Header from "../components/nav/Header";
import { ProfileProvider } from "../context/ProfileContext";

const DashboardLayout: React.FC = () => {
  const getAccessToken = () => {
    try {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken="))
        ?.split("=")[1] || null;
    } catch (error) {
      console.error("Error accessing cookies:", error);
      return null;
    }
  };

  const accessToken = getAccessToken();

  if (!accessToken) {
    return <Navigate to="/authentication" replace />;
  }

  return (
    <ProfileProvider>
    <div className="min-h-screen xl:flex">
      <div className="flex-1 transition-all duration-300 ease-in-out">
        <Header/>
        <div className="px-10 mx-auto w-7/8 mt-10">
          <Outlet />
        </div>
      </div>
    </div>
    </ProfileProvider>
  );
};

export default DashboardLayout;
