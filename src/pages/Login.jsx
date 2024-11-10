import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../Utilis/firebase.init";
import { Link } from "react-router-dom";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

    const formSubmitHandler =(e)=>{
        e.preventDefault();
        
        // get input value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)

        // reset error
        setErrorMessage(false);
        setSuccessMessage(false);

        // logic validation goes here


        // log in of firebase
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {console.log(res.user)
            setSuccessMessage(true);
        })
        .catch(error => {console.log("ERROR", error)
            setErrorMessage(error.message);
        });

        e.target.email.value ="";
        e.target.password.value ="";
    };

    const showPasswordHandler = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }
    return (
        <div>
            <h3 className="text-center text-3xl font-semibold my-8">Log in</h3>
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <form onSubmit={formSubmitHandler} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label relative">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                            {/* show password */}
                            <button onClick={showPasswordHandler} className="absolute -top-8 right-4">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                        </label>

                        </div>
                        {
                            errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p> || successMessage && <p className="text-green-500 text-sm">Successfully log in!</p>
                        }
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Don`t heave an account? <Link to={"/sign-up"} className="underline">Sign up</Link>
                            </p>
                        </div>
                    </form>

                    </div>
        </div>
    );
};

export default Login;