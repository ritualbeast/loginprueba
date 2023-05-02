import React, { useState, useEffect, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  //create a useEffect to fetch the data from the api and set the user state
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  //create a function to handle login
  const handleLogin = (email, password) => {
    const authenticatedUser = user.find(
      (u) => u.email === email && u.password === password
    );

    if (authenticatedUser) {
      setAuthenticatedUser(authenticatedUser);
      setErrorMessage("");
    } else {
      setErrorMessage("Usuario y/o contraseña incorrectos");
    }
  };

  //return the context provider
  return (
    <UserContext.Provider
      value={{
        authenticatedUser,
        errorMessage,
        handleLogin,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
