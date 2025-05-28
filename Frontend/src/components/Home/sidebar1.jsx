import "../../CSS/Home/sidebar1.css";
import { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ErrorPopup from "../ErrorPopup";
import { logout } from "../../Redux/authSlice";
import axios from "axios";

export default function Sidebar1({ onClose }) {
  const product = [
    { id: 1, Name: "Diabetes Powder" },
    { id: 2, Name: "Karela Powder" },
    { id: 3, Name: "Jamun Powder" },
    { id: 4, Name: "Karela & Jamun Powder" },
    { id: 5, Name: "Moringa Powder" },
    { id: 6, Name: "B12 Powder" },
  ];

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [popupMessage, setPopupMessage] = useState("");
  const handleLogout = async () => {
    try {
      // const response = await fetch(
      //   "https://yajveer-testing.vercel.app/api/v1/users/userlogout",
      //   {
      //     method: "POST",
      //     credentials: "include",
      //   }
      // );

      const response = await axios.post(
        "https://yajveer-testing.vercel.app/api/v1/users/userlogout",
        {},
        {
          withCredentials: true,
        }
      );

      const result = response.data;
      if (result.success) {
        dispatch(logout());
        setPopupMessage("Logout successful");
      } else {
        setPopupMessage("Logout failed: " + result.message);
      }
    } catch (error) {
      // console.error("Logout error:", error);
      // setPopupMessage("Logout error");
      if (error.response?.data?.message) {
        setPopupMessage(error.response.data.message);
      } else {
        setPopupMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="sidebar1-overlay">
      <div className="sidebar1-content">
        <div className="sdclose" onClick={onClose}>
          <i className="bi bi-x-lg  closeico"></i>
        </div>
        <div className="sidebar1cont">
          {product.map((item) => (
            <div className="side1con" key={item.id}>
              <Link>
                <div className="itemsName">
                  <p>{item.Name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="contactSection">
          <h3 className="contactHeader">Contact</h3>
          <Link to="tel:+917405430230">
            <div className="contactItem">
              <i className="bi bi-telephone-fill"></i>
              <span>+91 74054 30230</span>
            </div>
          </Link>

          <Link to="mailto:yajveerayurved@gmail.com">
            <div className="contactItem">
              <i className="bi bi-envelope-fill"></i>
              <span>yajveerayurved@gmail.com</span>
            </div>
          </Link>
          <div className="authSection">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="authLink">
                  Login
                </Link>
                <span>/</span>
                <Link to="/signup" className="authLink">
                  Signup
                </Link>
              </>
            ) : (
              <button className="authLink" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
      <ErrorPopup message={popupMessage} onClose={() => setPopupMessage("")} />
    </div>
  );
}
