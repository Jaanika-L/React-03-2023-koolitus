import React, { createContext, useState } from "react";

// Create a new context
const AuthContext = createContext();

// Create a provider component
const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(determineIfLoggedIn());

  function determineIfLoggedIn() {
    // PÄRISELT: pöördun firebase poole ja küsin kas see token on valiidne 
    if (sessionStorage.getItem("token") !== null ) {
        return true;
    }else {
    return false;
    }
  }
  //cartSum on globaalne muutuja

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthContextProvider };