import React from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
    <div className={classes.div}>
      <label>Invalid input</label>
      <p>Please enter a valid name and age (non-empty values).</p>
    </div>
  );
};

export default ErrorModal;
