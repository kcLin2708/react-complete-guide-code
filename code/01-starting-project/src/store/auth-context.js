import React from "react";

// AuthContext is a object which contains a component
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
