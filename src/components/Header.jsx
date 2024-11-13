import moment from "moment";
import headerLogo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10 space-y-2">
      <img className="w-96" src={headerLogo}></img>
      <h3 className="text-gray-500 text-lg">
        Journalism Without Fear or Favour
      </h3>
      <div className="text-gray-800 font-medium text-xl">
        {moment().format("dddd, MMMM Do YYYY")}
      </div>
    </div>
  );
};

export default Header;
