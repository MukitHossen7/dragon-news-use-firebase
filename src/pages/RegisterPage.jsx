import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        toast.success("Registration successful");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            console.log("User profile updated");

            navigate("/");
          })
          .catch((errors) => {
            console.log("Error", errors);
          });
      })
      .catch((error) => {
        console.log("Error", error);
        toast.error("Registration failed");
      });
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0">
        <h3 className="font-semibold text-3xl text-center pt-10">
          Register your account
        </h3>

        <form className="card-body" onSubmit={handleRegisterForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              name="photo"
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
