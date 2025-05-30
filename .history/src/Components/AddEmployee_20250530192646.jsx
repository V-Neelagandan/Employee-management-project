import React, { useRef, useState } from "react";
import Header from "./Main/Header";
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import Swal from "sweetalert2";
import CallAPI from "./CallAPI";
import '../../'
import ApiContext from "./ApiContext";
import { useContext } from "react";

const AddEmployee = () => {

  const {data , fetchData } = CallAPI()
  // const url='http://localhost:3000/Employee_Data'
  const {url} =useContext(ApiContext)
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  // const lastname = useRef(null);
  // console.log("test",lastname.current.value)
  const [Department, setDepartment] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Confirm, setConfirmPassword] = useState('');
  const [Email, setemail] = useState('');
  const [Contact, setContactno] = useState('');

  const handleForm = async(e) => {
   e.preventDefault();
    const Employee_Details = {
      Employee_firstname: firstname,
      Employee_lastname: lastname,
      Employee_Department: Department,
      Employee_username: Username,
      Employee_password: Password,
      Employee_conpassword: Confirm,
      Employee_email: Email,
      Employee_contact: Contact,
    };

    try {

      fetchData(url, 'post', Employee_Details)
      new Swal(`Success`, `Data Added Successfully`, `Success`);
      navigate("/View");

      // const url = "http://localhost:3000/Employee_Data";
      // await CallAPI({url:url,method :"post", body : Employee_Details});
      // navigate("/View");

    } catch {
      new Swal(`error`, `Failed to add the data`, `error`);
      navigate("/View");
    }
    
  };
  return (
    <>
      <Header />

      <form className="form">
        <div class="mb-3">
          <div className="text-center">
            <h4>Registration Form</h4>
            </div>
          <label for="exampleInputEmail1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            placeholder="firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div> 

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName"
            onChange={(e) => setLastname(e.target.value)}
            // ref={lastname}
            placeholder="lastname"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Department/Office
          </label>
          <input
            type="text"
            className="form-control"
            id="Office"
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Deparment"
          ></input>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="user"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="conpassword"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Contact-No
          </label>
          <input
            type="number"
            className="form-control"
            id="contact"
            placeholder="contact"
            onChange={(e) => setContactno(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleForm}>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddEmployee;



