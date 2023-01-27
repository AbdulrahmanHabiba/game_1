import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../Login/Login'

function ProtectedRoute({userData,saveUserData,children}) {
    if(userData !==null){
        return children ;
    }
    else{
        return <Login saveUserData={saveUserData}/>
    }
  return (
    <div>
        
    </div>
  ) ;
}

export default ProtectedRoute