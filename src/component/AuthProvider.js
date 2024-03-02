// import React from "react";
// import { useState } from "react";
// import { createContext } from "react";

// const AuthContextType = {
//   user: "",
//   signin: null,
//   signout: null,
// };
// const AuthContext = createContext(AuthContextType);

// function AuthProvider({ children }) {
//   let [user, setUser] = useState(null);

//   let signin = (newUser, callback) => {
//     setUser(newUser);
//     callback();
//   };

//   let signout = (callback) => {
//     setUser(null);
//     callback();
//   };

//   let value = { user, signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export { AuthProvider, AuthContext };
