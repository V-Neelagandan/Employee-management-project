import React, { useRef } from "react";
import Header from "./Main/Header";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../src/"

const Login = () => {
  const userName = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/Admin");
      if (
        response.data[1].Username == userName.current.value &&
        response.data[1].Password == password.current.value
      ) {
        sessionStorage.setItem("Username", userName.current.value);
        sessionStorage.setItem("Password", password.current.value);
        Swal.fire(`Congrats`, `Logged in SUCCESSFULLY`, `success`);
        navigate("/View");
      } else {
        Swal.fire({
          title: "Authentication Error",
          text: "Username or Password invalid",
          icon: "error",
          time: 2000,
        });
      }
    } catch {
      new Swal(`error`, `Logged in Failed`, `error`);
      navigate("/");
    }
  };
  return (
    <>
      <Header />
      <div className="bg">
        <div className="container">
          {/* <div class="con shadow-lg p-3 mb-5 bg-body-tertiary rounded"> */}
          <div class="imge">
            <img src="./image/user.png" alt="" />
          </div>
          <div className="head">
            {" "}
            <h2>Sign In</h2>
          </div>
          <div className="input">
            <input
              type="text"
              class="form-control"
              ref={userName}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input">
            <input
              type="text"
              class="form-control"
              ref={password}
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="button">
            <button class="btn btn-primary" type="button" onClick={submit}>
              Login
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Login;
