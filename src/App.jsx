import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import ViewEmployee from './Components/ViewEmployee'
import ViewEmployeeByID from './Components/ViewEmployeeByID'
import Delete from './Components/Delete'
import Login  from './Components/Login'
import ApiContext from './Components/ApiContext'

  
const App = () => {
  const url='http://localhost:3000/Employee_Data'

  return (
    <>
 <ApiContext.Provider value={{url}}>     {/*This is the context provider that provides the url to all the components */}
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='AddEmployee' element={<AddEmployee/>}/>
        <Route path='Edit/:id' element={<EditEmployee/>}/>
        <Route path='View' element={<ViewEmployee/>}/>
        <Route path='ViewEmployeeByID' element={<ViewEmployeeByID/>}/>
        <Route path='delete/:id' element={<Delete/>}/>
        <Route path='login' element={<Login/>}/>
        
      </Routes>
    </ApiContext.Provider>


    </>
    
  )
}

export default App