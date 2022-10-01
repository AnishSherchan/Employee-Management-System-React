import React from "react";
import PrimaryBtn from "../components/buttons/primary.js";
import SecondaryBtn from "../components/buttons/secondary.js";
import { Link } from "react-router-dom";
const landing = () => {
  return (
    <div>
      <div className="mt-60">
        <h1 className="text-center text-4xl font-semibold">
          Manage Your Employees.
        </h1>
        <div className="flex justify-center mt-8">
          <p className="w-5/12 text-center">
            Employee Management System (Software) developed by Anish Sherchan.
            Get connected in Github:{" "}
            <a
              className="text-sky-600/100"
              href="https://github.com/AnishSherchan"
            >
              {" "}
              Anish Sherchan
            </a>
            . Lets get Started.😄
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 space-x-10">
        <Link to="/Employee-Management-System-React/signup">
          <PrimaryBtn title="Get Started !" />
        </Link>
        <Link to="/Employee-Management-System-React/login">
          <SecondaryBtn title="Login !" />
        </Link>
      </div>
    </div>
  );
};

export default landing;
