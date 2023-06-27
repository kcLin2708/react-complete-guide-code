import React, { useState } from "react";
import AddUser from "./components/UserInput/AddUser";
import UserList from "./components/UserInput/UserList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

const usersData = [];

function App() {
  const [isValid, setIsValid] = useState(false);

  const validationHandler = (userInput) => {
    console.log(userInput);
    if (userInput["userName"].length > 0 && parseInt(userInput["age"]) > 0) {
      console.log("userInput is valid");
      setIsValid(true);
      usersData.push({
        userName: userInput["userName"],
        age: userInput["age"],
      });
    } else if (
      userInput["userName"].length > 0 &&
      parseInt(userInput["age"]) <= 0
    ) {
      console.log("Age must be greater than 0");
      setIsValid(false);
    } else if (
      userInput["userName"].length <= 0 &&
      parseInt(userInput["age"]) > 0
    ) {
      console.log("User name can't be empty");
      setIsValid(false);
    } else if (
      userInput["userName"].length <= 0 &&
      parseInt(userInput["age"]) < 0
    ) {
      console.log("Please check your input.");
    }
    console.log(usersData);
  };

  return (
    <div>
      <AddUser onValidate={validationHandler} />
      {/* conditionally returned       */}
      {!isValid && <ErrorModal />}
      {isValid && <UserList users={usersData} />}
    </div>
  );
}

export default App;
