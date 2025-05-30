import { useRef, useState, useReducer, useEffect,useContext } from "react";
import React from "react";
import Header from "./Main/Header";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import CallAPI from "./CallAPI";
import Swal from "sweetalert2";
import ApiContext from "./ApiContext";
import '../Css'

const EditEmployee = () => {

  const { data, fetchData } = CallAPI();
  // const url = "http://localhost:3000/Employee_Data/";
  const {url} = useContext(ApiContext)
  const navigate = useNavigate();
  const { id } = useParams();

  const initialState = {
    firstname: '',
    lastname: '',
    Department: '',
    Username: '',
    Password: '',
    Confirm: '',
    Email: '',
    Contact: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FIRSTNAME":
        return { ...state, firstname: action.payload };
        break;
      case "SET_LASTNAME":
        return { ...state, lastname: action.payload };
        break;
      case "SET_DEPARTMENT":
        return { ...state, Department: action.payload };
        break;
      case "SET_USERNAME":
        return { ...state, Username: action.payload };
        break;
      case "SET_PASSWORD":
        return { ...state, Password: action.payload };
        break;
      case "SET_CONFIRM":
        return { ...state, Confirm: action.payload };
        break;
      case "SET_EMAIL":
        return { ...state, Email: action.payload };
        break;
      case "SET_CONTACT":
        return { ...state, Contact: action.payload };
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer,initialState);
  const {
    firstname,
    lastname,
    Department,
    Username,
    Password,
    Confirm,
    Email,
    Contact,
  } = state;

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     `http://localhost:3000/Employee_Data/${id}`
  // )

  const getData = async()=>{

    const response = await axios.get(`${url}${id}`)

    // fetchData(url,'get',null,id)

  dispatch({
    type: `SET_FIRSTNAME`,
    payload: response.data.Employee_firstname,
  });
  dispatch({ type: `SET_LASTNAME`, payload: response.data.Employee_lastname });
  dispatch({
    type: `SET_DEPARTMENT`,
    payload: response.data.Employee_Department,
  });
  dispatch({ type: `SET_USERNAME`, payload: response.data.Employee_username });
  dispatch({ type: `SET_PASSWORD`, payload: response.data.Employee_password });
  dispatch({
    type: `SET_CONFIRM`,
    payload: response.data.Employee_conpassword,
  });
  dispatch({ type: `SET_EMAIL`, payload: response.data.Employee_email });
  dispatch({ type: `SET_CONTACT`, payload: response.data.Employee_contact });
};

useEffect(() => {
  getData();
}, [id]);

// const [firstname, setFirstname] = useState("");
// const [lastname, setLastname] = useState("");
// const lastname = useRef("");
// console.log("test", lastname.current.value);
// const [Department, setDepartment] = useState("");
// const [Username, setUsername] = useState("");
// const [Password, setPassword] = useState("");
// const [Confirm, setConfirmPassword] = useState("");
// const [Email, setemail] = useState("");
// const [Contact, setContactno] = useState("");

const handleForm = async (e) => {
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
 
    fetchData(url, "put", Employee_Details, id);
    new Swal(`Success`, `Data Added Successfully`, `Success`);
    navigate("/View");
}
  const getvalues = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "exampleInputFirstName") {
      dispatch({ type: `SET_FIRSTNAME`, payload: value });
    } else if (name == "exampleInputLastName") {
      dispatch({ type: `SET_LASTNAME`, payload: value });
    } else if (name == "exampleInputDepartment/Office") {
      dispatch({ type: `SET_DEPARTMENT`, payload: value });
    } else if (name == "exampleusername") {
      dispatch({ type: `SET_USERNAME`, payload: value });
    } else if (name == "exampleInputPassword1") {
      dispatch({ type: `SET_PASSWORD`, payload: value });
    } else if (name == "exampleInputPassword1") {
      dispatch({ type: `SET_CONFIRM`, payload: value });
    } else if (name == "exampleemail") {
      dispatch({ type: `SET_EMAIL`, payload: value });
    } else if (name == "examplecontact") {
      dispatch({ type: `SET_CONTACT`, payload: value });
    }
  };

  return (
    <>
      <Header />

      <form className="formedit">
        <div class="mb-3">
          <h2 className="heading">Registration Form</h2>
          <label for="exampleInputEmail1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            name="exampleInputFirstName"
            placeholder="firstname"
            // onChange={(e) => setFirstname(e.target.value)}
            onChange={getvalues}
            value={firstname}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            name="exampleInputLastName"
            // onChange={(e) => setLastname(e.target.value)}
            // ref={lastname}
            onChange={getvalues}
            placeholder="lastname"
            value={lastname}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Department/Office
          </label>
          <input
            type="text"
            class="form-control"
            name="exampleInputDepartment/Office"
            // onChange={(e) => setDepartment(e.target.value)}
            onChange={getvalues}
            placeholder="Deparment"
            value={Department}
          ></input>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            name="exampleusername"
            placeholder="Username"
            // onChange={(e) => setUsername(e.target.value)}
            onChange={getvalues}
            value={Username}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="exampleInputPassword1"
            placeholder="Password"
            // onChange={(e) => setPassword(e.target.value)}
            onChange={getvalues}
            value={Password}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            name="exampleInputPassword1"
            placeholder="Confirm Password"
            // onChange={(e) => setConfirmPassword(e.target.value)}
            onChange={getvalues}
            value={Confirm}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="exampleemail"
            placeholder="Email"
            // onChange={(e) => setemail(e.target.value)}
            onChange={getvalues}
            value={Email}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Contact-No
          </label>
          <input
            type="number"
            class="form-control"
            name="examplecontact"
            placeholder="contact"
            // onChange={(e) => setContactno(e.target.value)}
            onChange={getvalues}
            value={Contact}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleForm}>
          Submit
        </button>
      </form>
    </>
  );
};

export default EditEmployee;

