import { NavLink } from "react-router-dom";
import logoNav from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { name } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="">{name}</div>
      <div className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <img src={logoNav} className="w-8"></img>
        <NavLink to="/auth/login" className="bg-[#403F3F] text-white px-7 py-2">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
