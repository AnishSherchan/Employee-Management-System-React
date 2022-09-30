import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EmployeeTable from "../components/Table/EmployeeTable.js";
import AddNewEmployee from "../components/AddNewEmployee/NewEmployee.tsx";
import EmployeeData from "../Employeedata.json";
const Employees = () => {
  const history = useHistory();
  const [employeedata, setemployeeInfodata] = useState([]);
  const [numberOfEmp, setnumberOfEmp] = useState("");
  // protected route function
  const Protected = () => {
    if (localStorage.getItem("token") === null) {
      history.push("/");
      return null;
    }
  };

  const NewUpdate = () => {
    if (localStorage.getItem("Emp-data") !== null) {
      setemployeeInfodata(JSON.parse(localStorage.getItem("Emp-data")));
    }
  };

  const empdata = () => {
    // if (localStorage.getItem("Emp-data") !== null) {
    //   setemployeeInfodata(JSON.parse(localStorage.getItem("Emp-data")));
    // } else {
    //   localStorage.setItem("Emp-data", JSON.stringify(EmployeeData));
    //   setemployeeInfodata(EmployeeData);
    // }

    if (localStorage.getItem("Emp-data") !== null) {
      setemployeeInfodata(JSON.parse(localStorage.getItem("Emp-data")));
    }
  };
  // console.log(employeedata);

  useEffect(() => {
    Protected();
    empdata();
  }, []);
  return (
    <div className="mt-16">
      <div className="pt-6 mx-20 flex justify-between items-center">
        <h1 className=" text-xl ">Employees</h1>
        <AddNewEmployee empdata={employeedata} NewUpdate={NewUpdate} />
      </div>
      <div className="flex flex-col justify-items-center items-center   ">
        <div className="rounded-3xl drop-shadow-2xl w-11/12 mt-5 mb-6 p-5 bg-navcolor">
          <EmployeeTable empdata={employeedata} NewUpdate={NewUpdate} />
        </div>
      </div>
    </div>
  );
};

export default Employees;
