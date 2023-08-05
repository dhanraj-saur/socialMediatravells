import logo from './logo.svg';
import './App.css';
import React from "react";
import Nav from './Components/Nav';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Nav />
      <Outlet/>
    </div>
  )
}

export default App;

