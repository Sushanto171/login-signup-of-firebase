import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Utilis/firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const trams = e.target.trams.checked;
    console.log(trams)

    // reset error message
    setErrorMessage("");
    setSuccessMessage(false);
    
    // validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      return setErrorMessage(
        "Password at least one Uppercase, one lowercase, one special character and one digit."
      );
    }
    if (password.length < 6) {
      return setErrorMessage(
        "Password should be at least 6 characters or longer!"
      );
    }
    if(!trams){
      return setErrorMessage("accept our trams & conditions!")
    }

    // create user with password & email
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setSuccessMessage(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log("ERROR", error);
      });
    e.target.email.value = "";
    e.target.password.value = "";
  };

  const showPasswordHandler = (e) => {
    setShowPassword(!showPassword);
    e.preventDefault();
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl font-semibold my-8 ml-5">Register Now!</h3>
      <form onSubmit={formHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        {errorMessage && (
          <p className="text-red-500">
            {errorMessage === "Firebase: Error (auth/email-already-in-use)."
              ? "Error (this email already exist!)"
              : errorMessage}
          </p>
        )}
        {successMessage && <p className="text-green-500">Sign up success!</p>}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button
            onClick={showPasswordHandler}
            className="absolute right-3 top-14"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label justify-start gap-3">
            <input
              type="checkbox"
              name="trams"
              className="checkbox checkbox-success"
            />
            <span className="label-text">Accept our trams and policy.</span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
