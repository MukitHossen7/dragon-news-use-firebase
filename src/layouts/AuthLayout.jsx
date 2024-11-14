import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-Poppins bg-gray-100 pt-5">
      <nav className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <Navbar></Navbar>
      </nav>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
