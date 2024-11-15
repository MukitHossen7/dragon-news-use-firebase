import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const SignInPage = () => {
  const { signUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleLoginFrom = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log({ email, password });
    signUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        toast.success("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(
          "Sorry, the email or password you entered is incorrect. Please try again."
        );
        console.log("Error: " + error);
      });
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0">
        <h3 className="font-semibold text-3xl text-center pt-10">
          Login your account
        </h3>

        <form className="card-body" onSubmit={handleLoginFrom}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control rounded-none mt-6">
            <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white">
              Login
            </button>
          </div>
        </form>
        <p className="text-sm text-center font-semibold pb-8">
          Dont Have An Account?{" "}
          <span className="text-red-500 underline">
            <Link to="/auth/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
