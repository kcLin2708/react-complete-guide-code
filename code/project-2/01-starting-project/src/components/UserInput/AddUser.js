import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";

const initialInput = {
  userName: "",
  age: 1,
};
const AddUser = (props) => {
  const [enteredInput, setEnteredInput] = useState(initialInput);

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onValidate(enteredInput);
  };

  const inputChangeHandler = (identifier, value) => {
    setEnteredInput((prevState) => {
      return { ...prevState, [identifier]: value };
    });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={addUserHandler}>
        <label className={classes.label} htmlFor="username">
          User name
        </label>
        <input
          id="username"
          type="text"
          onChange={(event) =>
            inputChangeHandler("userName", event.target.value)
          }
        />
        <label className={classes.label} htmlFor="age">
          Age
        </label>
        <input
          id="age"
          type="number"
          onChange={(event) => inputChangeHandler("age", event.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
