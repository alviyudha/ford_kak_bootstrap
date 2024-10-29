import { Outlet } from "react-router-dom";
import AppNavbar from "./src/admin-kak/component/AppNavbar";

const LayoutAdmin = ({ authUser }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AppNavbar authUser={authUser} />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
