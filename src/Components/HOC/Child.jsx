import React from 'react'


const Child = (props) => {

  return (
   
    <h2 style={{color:'black',backgroundColor:'lightblue',padding:'15px'}}>Total Number Of Employee: {props.getCount} </h2>
  )
}
export default Child;