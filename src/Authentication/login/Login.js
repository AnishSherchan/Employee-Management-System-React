import React, { Fragment, useState } from "react";
import BTN from "../../components/buttons/primary";
import BTNSec from "../../components/buttons/secondary";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  // History for pushing new URLS
  const history = useHistory();
  // Users Username and password kept in USeState
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  // Destructuring userdetails
  const { username, password } = inputs;
  // Function for noticing changes on textfield and updating using useState
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  // Functioon for clearing user data on textfields
  const Clear = () => {
    setInputs({ username: "", password: "" });
  };
  // Main logic behind Login
  const loginClicked = () => {
    // Checking if length is 0
    if (username.length != 0 && password.length != 0) {
      // Checking if localstoagre has userdetails
      if (localStorage.getItem("userDetails") != null) {
        const userDeatil = JSON.parse(localStorage.getItem("userDetails"));
        // Checking password and username match
        if (
          username === userDeatil.username &&
          password === userDeatil.password
        ) {
          try {
            localStorage.setItem("token", "1012344");
            history.push("/dashboard");
            toast.success("Logged in Successfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
            toast.warn("Localstorage has been used for storing data!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
          } catch (err) {
            console.error(err.message);
          }
        } else {
          toast.error("No User Found!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.error("No User Found! Please Signup!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Please fill all credentials!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <div>
        <div className="md:flex md:flex-col md:items-center mt-36">
          <div className=" h-fitcontent md:w-5/12 md:bg-navcolor rounded-3xl drop-shadow-2xl md:mt-16">
            <h1 className="text-2xl mt-10 heading text-center">Welcome Back</h1>
            <div className="mt-10 px-8 mb-12">
              <form className="flex flex-col">
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={(e) => onChange(e)}
                  className="h-12 rounded-xl border border-slate-300 my-3 px-3"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  className="h-12 rounded-xl border border-slate-300 my-3 px-3"
                />
              </form>
              <div className="flex justify-center space-x-10">
                <BTN title="Submit" onClick={loginClicked} />
                <BTNSec title="Clear" onClick={Clear} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
