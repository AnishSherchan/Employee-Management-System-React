import React, { useState, useEffect } from "react";
import Chartdata from "../components/Charts/BarChart.tsx";
import DounatChart from "../components/Charts/DounatChart.tsx";
import { useHistory } from "react-router-dom";
import Card from "../components/Card/Card.js";
const Dashboard = () => {
  const history = useHistory();
  const [name, Setname] = useState("");
  const [totalEmp, setEmp] = useState();
  const [employeedata, setemployeeInfodata] = useState([]);

  const UserInfo = () => {
    const userDeatil = JSON.parse(localStorage.getItem("userDetails"));
    Setname(userDeatil.name);
    if (localStorage.getItem("Emp-data") !== null) {
      setemployeeInfodata(JSON.parse(localStorage.getItem("Emp-data")));
    }
  };

  // protected route function
  const Protected = () => {
    if (localStorage.getItem("token") === null) {
      history.push("/");
      return null;
    }
  };

  useEffect(() => {
    UserInfo();
    Protected();
  }, []);

  useEffect(() => {
    const female = employeedata.filter((obj) => {
      if (obj.gender == "Female") {
        return obj;
      }
    });
    let fnum = female.length;
    let mnum = employeedata.length - fnum;
    const total = [fnum, mnum];
    setEmp(total);
  }, [employeedata]);
  return (
    <div className="mt-16">
      <h1 className="text-2xl pt-6 px-4 text-center heading ">
        Hello {name} 👋
      </h1>

      <div className="mb-0">
        <h1 className="text-3xl tracking-widest  text-gray-600 text-center mb-0 py-4 px-4 heading ">
          ❛ Welcome to{" "}
          <span className="font-semibold text-primaryButton">EMS</span> By{" "}
          <span className="text-primaryButton font-semibold">Sherchan</span>.❜
        </h1>
      </div>

      <Card>
        <div className="flex flex-wrap justify-evenly ">
          <div className="flex mt-5 rounded-3xl drop-shadow-2xl flex-col w-60 align-middle  bg-white">
            <h1 className="text-black text-xl p-3 md:text-lg text-center">
              Total number of Employee
            </h1>
            <h1 className="text-sky-600 text-xl p-3 md:text-2xl text-center">
              156
            </h1>
          </div>
          <div className="flex mt-5 rounded-3xl drop-shadow-2xl flex-col w-60 align-middle  bg-white">
            <h1 className="text-black text-xl p-3 md:text-lg text-center">
              Avaliable Leaves
            </h1>
            <h1 className="text-sky-600 text-xl p-3 md:text-2xl text-center">
              4
            </h1>
          </div>
          <div className="flex mt-5 rounded-3xl drop-shadow-2xl flex-col w-60 align-middle  bg-white">
            <h1 className="text-black text-xl p-3 md:text-lg text-center">
              Total number of Feedback
            </h1>
            <h1 className="text-sky-600 text-xl p-3 md:text-2xl text-center">
              169
            </h1>
          </div>
          <div className="flex mt-5 rounded-3xl drop-shadow-2xl flex-col w-60 align-middle  bg-white">
            <h1 className="text-black text-xl p-3 md:text-lg text-center">
              Total Earning
            </h1>
            <h1 className="text-sky-600  text-xl p-3 md:text-2xl text-center">
              $ 11,001
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap m-8 justify-evenly">
          <Chartdata />
          <DounatChart totalEmp={totalEmp} />
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
