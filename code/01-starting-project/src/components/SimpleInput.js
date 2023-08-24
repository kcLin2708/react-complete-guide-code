import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnterNameTouched] = useState(false);
  const [enteredEMail, setEnteredEMail] = useState("");
  const [enteredEMailTouched, setEnteredEMailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const enteredEMailIsValid = enteredEMail.includes("@");
  const emailInputIsInValid = !enteredEMailIsValid && enteredEMailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEMailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEMail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEMailTouched(true);
  };

  const formSubmissonHandler = (event) => {
    event.preventDefault();

    setEnterNameTouched(true);

    if (!enteredNameIsValid || !enteredEMailIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredEMail("");
    // inputNameRef.current.value = " " NOT IDEA, DON'T MANIPULATE THE DOM!!!
    setEnterNameTouched(false);
    setEnteredEMailTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissonHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInValid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEMail}
        />
      </div>
      {emailInputIsInValid && (
        <p className="error-text">Please enter a valid email</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
