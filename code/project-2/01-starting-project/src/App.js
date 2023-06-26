import React from "react";
import AddUser from "./components/UserInput/AddUser";
import UserList from "./components/UserInput/UserList";

function App() {
  return (
    <div>
      <AddUser />
      {/* conditionally returned       */}
      <UserList />
    </div>
  );
}

export default App;
