import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const [enteredCurrentSaving, setEnteredCurrentSaving] = useState(0);
  const [enteredYearlySaving, setEnteredYearlySaving] = useState(0);
  const [enteredExpectedInterest, setEnteredExpectedInterest] = useState(0);
  const [enteredInvestDuration, setEnteredInvestDuration] = useState(0);

  const setCurrentSaving = (event) => {
    setEnteredCurrentSaving(event.target.value);
  };

  const setYearlySaving = (event) => {
    setEnteredYearlySaving(event.target.value);
  };

  const setExpectedInterest = (event) => {
    setEnteredExpectedInterest(event.target.value);
  };

  const setDuration = (event) => {
    setEnteredInvestDuration(event.target.value);
  };

  const resetHandler = (event) => {
    setEnteredCurrentSaving(0);
    setEnteredYearlySaving(0);
    setEnteredExpectedInterest(0);
    setEnteredInvestDuration(0);
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

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              onChange={setCurrentSaving}
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              onChange={setYearlySaving}
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              onChange={setExpectedInterest}
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" onChange={setDuration} id="duration" />
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
