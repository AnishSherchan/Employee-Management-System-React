import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col justify-items-center items-center  ">
      <div className="rounded-3xl drop-shadow-2xl w-10/12 mt-5 mb-6  bg-adminDash">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
