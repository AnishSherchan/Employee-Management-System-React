import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
const Navbar = () => {
  const [token, setToken] = useState("");
  const location = useLocation();

  const isLoggedIn = () => {
    if (localStorage.getItem("token") != null) {
      setToken(localStorage.getItem("token"));
    }
  };
  const SignOut = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logged Out Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    isLoggedIn();
  }, [location, token]);
  return (
    <div className={styles.container}>
      <Link to="/Employee-Management-System-React/">
        <div className="flex justify-center items-center">
          <i class="fa-solid fa-people-roof text-xl"></i>
          <h2 className="text-2xl text-center ml-2 ">
            EMS<span className="text-3xl mb-1 text-red-500">.</span>
          </h2>
        </div>
      </Link>
      <ul>
        {token.length != 0 && (
          <Link to="/Employee-Management-System-React/dashboard">
            <li>Dashboard</li>
          </Link>
        )}
        {token.length != 0 && (
          <Link to="/Employee-Management-System-React/employee">
            <li>Employees</li>
          </Link>
        )}
        {token.length != 0 && (
          <Link to="/Employee-Management-System-React/">
            <li onClick={SignOut}>Sign Out</li>
          </Link>
        )}
        {token.length == 0 && (
          <Link to="/Employee-Management-System-React/login">
            <li>Login</li>
          </Link>
        )}
        {token.length == 0 && (
          <Link to="/Employee-Management-System-React/signup">
            <li>Sign Up</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
