import React from "react";
import "../../components/css/Login.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Home/Home.jsx"

export default function Login() {
  const [inputs, setInputs] = useState("");

  function AllInputs() {
    if (AllInputs.length === 0) {
      toast.error("Please fill the your email address fields");
    } else {
      toast.success("You Sing In SUCCESSFULLY !", {
        autoClone: true,
        position: "top-right",
        autoClose: 1500,
      });
    }
  }
  return (
    <div className="Login ">
      <div className="Card">
        <h1 className="H11 text-center">CRUD OPERATIONS</h1>

        <div className="SingIn">
          <h2 className="H21 text-center">Sign In</h2>
          <p className="P1 text-center">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="Inputs text-center">
          <label htmlFor="email_address" className="">
            <p className="InputP1 ">Email</p>
            <input
              type="email"
              onChange={() => setInputs()}
              id="email_address"
              className="form-control Input"
              placeholder="Enter your email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </label>
          <br />
          <label htmlFor="Password" className="m-3 text-center">
            <p className="InputP2">Password</p>

            <input
              type="password"
              onChange={() => setInputs()}
              id="Password"
              className="form-control Input"
              placeholder="Enter your password"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </label>
        </div>
        <div className="Button">
          <a href="../Home/Home.jsx" type="submit" className="BtnSingIn">
            SING IN
          </a>
        </div>
        <div className="PEnd">
          <p>
            Forgot your password?{" "}
            <a href="#" className="text-warning">
              Reset Password
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
