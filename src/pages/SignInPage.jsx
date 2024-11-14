import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0">
        <h3 className="font-semibold text-3xl text-center pt-10">
          Login your account
        </h3>

        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
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
