import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Login from './components/Login';
import Messaging from "./components/Messaging";
import Homepage from './components/Homepage';
import MyAccount from './components/MyAccount';
import AuthRoute from "./components/AuthRoute";
import { AuthProvider } from "./utils/auth";

//once the utils auth is set up, wrap below in <AuthProvider> so it can't be accessed unless auth

function App() {

  return (
    <>
      
      <AuthRoute>
        <Router>
          
          <Nav />
              <Routes>
                <Route  path="/login"  element={<Login />} />
                <Route  path="/dashboard"  element={<Dashboard />} />
                <Route  path="/" element={<Homepage />} />
                <Route  path="/Messaging" element={<Messaging />} />
                <Route path="/MyAccount" element={<MyAccount />} />
  
              </Routes>
           
        </Router>
      </AuthRoute>
      
    </>
  );
}

export default App;
