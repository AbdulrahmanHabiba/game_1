import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './Componants/RootLayout/RootLayout';
import ErorrPage from './Componants/ErorrPage/ErorrPage';
import Home from './Componants/Home/Home';
import Rejester from './Componants/Rejester/Rejester';
import Login from './Componants/Login/Login';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Profile from './Componants/Profile/Profile';
import ProtectedRoute from './Componants/ProtectedRoute/ProtectedRoute';
import GameDetails from './Componants/GameDetails/GameDetails';
import AllGames from './Componants/AllGames/AllGames';
import GamesByPlatform from './Componants/GamesByPlatform/GamesByPlatform';
import SortedGames from './Componants/SortedGames.jsx/SortedGames';
import GamesByCategory from './Componants/GamesByCategory/GamesByCategory';
function App() {
  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      saveUserData()
    }
  }, [])

  const [userData, setUserData] = useState(null)

  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken')
    let decodedToken = jwtDecode(encodedToken)
    setUserData(decodedToken);
  }
  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null)
    return <Navigate to='/login' />
  }

  let routers = createBrowserRouter([
    {
      path: '/', element: <RootLayout userData={userData} logOut={logOut} />, children: [
        {path: '*', element: <ErorrPage /> },
        {path: 'home', element: <ProtectedRoute  userData={userData}><Home /> </ProtectedRoute>},
        {path: 'register', element: <Rejester userData={userData}/> },
        {path: 'login', element: <Login saveUserData={saveUserData}/> },
        {path: 'details/:id', element: <ProtectedRoute userData={userData} ><GameDetails userData={userData}/></ProtectedRoute>  },
        {path: 'profile', element: <ProtectedRoute  userData={userData} saveUserData={saveUserData}><Profile userData={userData} /></ProtectedRoute>},
        {path: 'all', element: <ProtectedRoute  userData={userData}><AllGames /> </ProtectedRoute>},
        {path: 'platforms/:platform', element: <ProtectedRoute  userData={userData}><GamesByPlatform /> </ProtectedRoute>},
        {path: 'sort-by/:sort', element: <ProtectedRoute  userData={userData}><SortedGames /> </ProtectedRoute>},
        {path: 'category/:category', element: <ProtectedRoute  userData={userData}><GamesByCategory/>
        </ProtectedRoute>},
        {index : true , element : <Login saveUserData={saveUserData} />   } ,
      ]
    }
  ])


  return <RouterProvider router={routers} />;
}

export default App;
