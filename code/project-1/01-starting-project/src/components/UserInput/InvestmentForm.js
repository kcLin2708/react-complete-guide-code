import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";

const initiaUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const InvestmentForm = (props) => {
  const [enteredCurrentSaving, setEnteredCurrentSaving] = useState(0);
  const [enteredYearlySaving, setEnteredYearlySaving] = useState(0);
  const [enteredExpectedInterest, setEnteredExpectedInterest] = useState(0);
  const [enteredInvestDuration, setEnteredInvestDuration] = useState(0);

  const [userInput, setUserInput] = useState(initiaUserInput);

  const resetHandler = (event) => {
    setUserInput(initiaUserInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      "current-savings": enteredCurrentSaving,
      "yearly-contribution": enteredYearlySaving,
      "expected-return": enteredExpectedInterest,
      duration: enteredInvestDuration,
    };
    // console.log(enteredData);
    props.onSaveData(enteredData);
    setEnteredCurrentSaving(0);
    setEnteredYearlySaving(0);
    setEnteredExpectedInterest(0);
    setEnteredInvestDuration(0);
  };
  // Generic way
  const inputChangeHandler = (input, value) => {
    // console.log(input, value);
    //... spread operator
    // Dynamic updates state
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <div>
      <form className={styles["form"]} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings" className={styles["label"]}>
              Current Savings ($)
            </label>
            <input
              type="number"
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              value={userInput["current-savings"]}
              id="current-savings"
              className={styles["input"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution" className={styles["label"]}>
              Yearly Savings ($)
            </label>
            <input
              type="number"
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={userInput["yearly-contribution"]}
              id="yearly-contribution"
              className={styles["input"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return" className={styles["label"]}>
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={userInput["expected-return"]}
              id="expected-return"
              className={styles["input"]}
            />
          </p>
          <p>
            <label htmlFor="duration" className={styles["label"]}>
              Investment Duration (years)
            </label>
            <input
              type="number"
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={userInput["duration"]}
              id="duration"
              className={styles["input"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default InvestmentForm;
