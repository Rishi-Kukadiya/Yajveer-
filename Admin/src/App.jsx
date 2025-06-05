import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ForgotPass from "./components/ForgotPass";
import ProtectedRoute from "./components/ProtectedRoute";
import LoadingAnimation from "./components/LoadingAnimation";
import { useDispatch, useSelector } from "react-redux";
import { Fectchdata } from "./Redux/CartSlice";
import { fectchdata } from "./Redux/Review";
import { contactdata } from "./Redux/Contactus";
import { fectchuserdata } from "./Redux/User";
import { useEffect } from "react";
import Notfound from "./components/Notfound";

function App() {
  const dispatch = useDispatch();
  
  const {
    loading: cartLoading,
    error: cartError
  } = useSelector((state) => state.cart);

  const {
    loading: reviewLoading,
    error: reviewError
  } = useSelector((state) => state.reviews);

  const {
     loading : contactusLoading,
     error : contactusError
  } = useSelector((state) => state.contactus);


  const {
     loading : userLoading,
     error : userError
  } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(Fectchdata());
    dispatch(fectchdata());
    dispatch(contactdata());
    dispatch(fectchuserdata());
  }, [dispatch]);


  if (cartLoading || reviewLoading || contactusLoading || userLoading) {
    return <LoadingAnimation />;
  }

  if (cartError || reviewError || contactusError || userError) {
    return (
      <div className="error-container">
        <h2>Error Loading Data</h2>
        <p>{cartError || reviewError}</p>
        <button
          onClick={() => {
            dispatch(Fectchdata());
            dispatch(fectchdata());
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/forgotPassword" element={<ForgotPass />} />
      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes>
  );
}

export default App;
