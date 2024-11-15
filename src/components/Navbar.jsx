import { Link, NavLink } from "react-router-dom";
import logoNav from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => {
        console.log("Error: " + error);
      });
  };
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="font-bold">{user?.email}</div>
      <div className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth/about">About</NavLink>
        <NavLink to="/auth/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-3">
        {user?.email ? (
          <div className="flex items-center gap-3">
            <p className="font-semibold">{user.displayName}</p>
            <img className="w-10 h-10 rounded-full" src={user.photoURL}></img>
          </div>
        ) : (
          <img src={logoNav} className="w-8"></img>
        )}

        {user ? (
          <Link
            onClick={handleLogOut}
            className="bg-[#403F3F] text-white px-7 py-2"
          >
            Log_Out
          </Link>
        ) : (
          <NavLink
            to="/auth/login"
            className="bg-[#403F3F] text-white px-7 py-2"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
