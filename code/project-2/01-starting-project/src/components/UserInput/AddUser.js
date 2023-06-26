import React from "react";
import classes from "./AddUser.module.css";

const AddUser = () => {
  return (
    <div>
      <form className={classes.form}>
        <p>
          <label className={classes.label}>User name</label>
          <input />
        </p>
        <p>
          <label className={classes.label}>Age</label>
          <input />
        </p>
        <button>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
