import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from './../Utilis/firebase.init';
import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [errorMessages, setErrorMessages] =useState('')

    const formHandler = (e) => {

      e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessages('')
        // create user  with password email
        createUserWithEmailAndPassword (auth, email, password)
        .then(res => console.log(res.user))
        .catch(error =>{ 
          setErrorMessages(error.message)
          console.log("Error" , error)});
        e.target.email.value="";
        e.target.password.value="";
    } 
  return (
    <div  className="max-w-3xl mx-auto px-5">
        <h3 className="text-3xl font-semibold my-8">Sign up now</h3>
    <form onSubmit={formHandler} className="space-y-8">
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="email" className="grow" placeholder="Email" name="email" required/>
      </label>
      {
        errorMessages && <p className="text-red-500">{errorMessages}</p>
      }
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="password" className="grow" placeholder="Password" name="password" required/>
      </label>

      <div className="form-control mt-6 w-48 ">
          <button className="btn btn-accent btn-primary">Sign up</button>
        </div>
        <div>
          <p>Already heave an account? <Link to={'/log-in'} className="underline"> Log in</Link></p>
        </div>
    </form>
    </div>
  );
};

export default SignUp;
