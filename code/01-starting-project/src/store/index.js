import { Component } from "react";

import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };
const counterReuducer = (state = initialState, action) => {
  // NEVER MUTATING STATE!!! state.counter++
  // ALWAYS WRITE A NEW STATE!!!
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === "toggle") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }

  return state;
};

const store = createStore(counterReuducer);

export default store;
