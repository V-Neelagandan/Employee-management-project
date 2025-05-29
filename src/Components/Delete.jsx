import CallAPI from "./CallAPI";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import axios from 'axios'
import Swal from "sweetalert2";

const Delete = () => {
  const { data, fetchData } = CallAPI();

  const { id } = useParams();
  const navigate = useNavigate();
  const delData = async () => {
    try {
      fetchData(`http://localhost:3000/Employee_Data/`, "delete", null, id);

      //  const response=await axios.delete(`http://localhost:3000/Employee_Data/${id}`)
      //  console.log(response)
      new Swal("Success", "Employee Data deleted Successfully", "Success");

      navigate("/View");
    } catch {
      new Swal("error", "failed to delete the data");
      navigate("/View");
    }
  };
  useEffect(() => {
    delData();
  }, []);
  return ( 
  <>
   
  </>
  )
};
export default Delete;
