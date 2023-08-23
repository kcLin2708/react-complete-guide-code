import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const inputNameRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  // const [inputIsValid, setInputIsValid] = useState(false);
  const [enteredNameTouched, setEnterNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  // useEffect(() => {
  //   if (inputIsValid) {
  //     console.log("Input is valid!");
  //   }
  // }, [inputIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // if (event.target.value.trim() !== "") {
    //   setInputIsValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true);
    // if (enteredName.trim() === "") {
    //   setInputIsValid(false);
    // }
  };

  const formSubmissonHandler = (event) => {
    event.preventDefault();

    setEnterNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    // setInputIsValid(true);
    // console.log(enteredName);
    // const enteredValue = inputNameRef.current.value;
    // console.log(enteredValue);

    setEnteredName("");
    // inputNameRef.current.value = " " NOT IDEA, DON'T MANIPULATE THE DOM!!!
    setEnterNameTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissonHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={inputNameRef}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInValid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
