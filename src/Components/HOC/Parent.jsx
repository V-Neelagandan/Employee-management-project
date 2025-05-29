import React, { useContext } from 'react'
// import ApiContext from '../ApiContext'
import CallAPI from '../CallAPI'
import { useState } from 'react'

const Parent = (Wrapped) => {
// const {url} = useContext(ApiContext)
const url = 'http://localhost:3000/Employee_Data'
const { data, fetchData } = CallAPI();
const [empCount, setEmpCount] = useState(0);
    const Child = () => {
        const getCount = () => {
            fetchData(url);
            // console.log(data,length);
            // Count= data.length;
            // return count;
            setEmpCount(data.length);
          
        }
        getCount();
        return (
        <Wrapped  getCount={empCount} />
        )
    }

  return (
    Child
  )
}
export default Parent;  