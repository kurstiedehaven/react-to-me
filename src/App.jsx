// imports
import React from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';

function App() {
  useEffect(() => {
    document.cookie = "myCookie=myValue; SameSite=None; Secure";
  }, []);
  return (
    <div className="main">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
