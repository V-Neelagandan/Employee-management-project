import React, { useContext, useEffect } from 'react'
import Header from './Main/Header'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import CallAPI from './CallAPI'
import './Css/View.css'
import Parent from './HOC/Parent'
import Child from './HOC/Child'
import ApiContext from './ApiContext'


const ViewEmployee = () => {

  const {url} = useContext(ApiContext);
  const {data,fetchData} = CallAPI()
  const Count=Parent(Child)

  useEffect(() => {
    // const url = `http://localhost:3000/Employee_Data`;
    fetchData(url)
}, [])

  //   const [fetchdata, setFetchData]=useState([])
  // useEffect(()=>{
  //     axios.get("http://localhost:3000/Employee_Data")
  //    .then(response =>setFetchData(response.data))
  //    .catch(error =>console.log("failed",error));
  // },[])
  
//   const {data,fetchData}  = CallAPI()
//   useEffect(()=>{
//   const url='http://localhost:3000/Employee_Data'
//    fetchData(url)
// },[data])



  return (
    <>
    <Header/>
     <Count/>
    <table className="table table-info table-striped">
  
    <thead >
    <tr>
      <th>Emp_Id</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Department</th>
      <th>Username</th>
      <th>password</th>
      <th>Confirm password</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>

  <tbody>
  {
  data.map((emp)=>{

return (

    <tr key={emp.id}>
      <td>{emp.id}</td>
      <td>{emp.Employee_firstname}</td>
      <td>{emp.Employee_lastname}</td>
      <td>{emp.Employee_Department}</td>
      <td>{emp.Employee_username}</td>
      <td>{emp.Employee_password}</td>
      <td>{emp.Employee_conpassword}</td>
      <td>{emp.Employee_email}</td>
      <td>{emp.Employee_contact}</td>
      <td><Link to={`/Edit/${emp.id}`}><i className="fa fa-edit" ></i></Link></td>
      <td><Link to={`/Delete/${emp.id}`}><i className="fa fa-trash"></i></Link></td>
    </tr>
  )
})
}
    </tbody>
</table>
    </>
  )
}

export default ViewEmployee


