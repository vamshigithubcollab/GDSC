import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Admin from "./AdminComponents/Admin";
import Signup from "./Signup/Signup";
import User from "./Users/User";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
