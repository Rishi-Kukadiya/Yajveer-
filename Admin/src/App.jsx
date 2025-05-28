import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ForgotPass from "./components/ForgotPass";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/home" element={<Home />} />
       */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/forgotPassword" element={<ForgotPass />} />
    </Routes>
  );
}

export default App;
