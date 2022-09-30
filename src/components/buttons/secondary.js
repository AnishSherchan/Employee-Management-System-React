import React from "react";
import styles from "./primary.module.css";
const secondary = (props) => {
  return (
    <button
      className={`${styles.buttonsec} ${styles.custombutton}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default secondary;
