import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar'
export default function RootLayout({userData , logOut} ) {
  return (
      <>
          <Navbar userData={userData} logOut={logOut} />
    <Outlet>

         </Outlet>

     
    </>
  )
}
