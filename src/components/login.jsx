import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex flex-col gap-3">
      <button className="border-2 border-sky-400 py-2 text-sky-500 rounded-xl justify-center flex gap-2 items-center">
        <FcGoogle className="text-2xl" /> Login with Google
      </button>
      <button className="border-2 border-gray-400 py-2 text-gray-500 rounded-xl justify-center flex gap-2 items-center">
        <FaGithub className="text-2xl" /> Login with Github
      </button>
    </div>
  );
};

export default Login;
