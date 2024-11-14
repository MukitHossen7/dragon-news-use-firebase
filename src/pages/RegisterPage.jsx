import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0">
        <h3 className="font-semibold text-3xl text-center pt-10">
          Register your account
        </h3>

        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
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
          </div>
          <div className="form-control">
            <label className="cursor-pointer justify-start gap-4 label">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-accent"
              />
              <span className="label-text">Accept Terms & Conditions</span>
            </label>
          </div>
          <div className="form-control rounded-none mt-6 ">
            <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white">
              Register
            </button>
          </div>
        </form>
        <p className="text-sm text-center font-semibold pb-8">
          Already Have An Account?{" "}
          <span className="text-red-500 underline">
            <Link to="/auth/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
