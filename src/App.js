import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/login/login";
import Home from "./pages/Home/Home";
import axios from 'axios';
import SignUp from './pages/SignUp/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fromData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handelChanges = (e) => {
    setFormData({
      ...fromData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3002/users`)
      .then((res) => {
        const isValidUser = res.data.some(user => user.email === fromData.email && user.password === fromData.password)
        if (isValidUser) {
          // Handle successful login
          console.log("Login successful!");
          setIsLoggedIn(true)
        } else {
          alert('Wrong credentials.');
        }
      })
      .catch((err) => {
        alert("Something went wrong")
      })
  };
  return (
    <div className="">
      {
        isLoggedIn ?
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
          :
          <Router>
            <Routes>
              <Route path="/" element={<Login handleSubmit={handleSubmit} handelChanges={handelChanges} fromData={fromData} />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
          </Router>
      }
    </div>
  );
}

export default App;
