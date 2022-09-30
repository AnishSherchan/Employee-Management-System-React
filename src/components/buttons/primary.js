import React from "react";
import styles from "./primary.module.css";
const primary = (props) => {
  return (
    <button
      className={`${styles.custombutton} ${styles.button}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default primary;
