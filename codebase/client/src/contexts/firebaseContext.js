import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

//managing the user's data
//whenever we're using AuthProvider we'll be using React -> children
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        history.push("/copyApi");
      } //if we have the user only will we want to navigate to the chats page
      //initially we're always pushing the user to Chats, but if keep setUser to null, and use a conditional logic, we will let the user browse across
      //back to the home page
    });
  }, [user, history]);
  //the first one is a callback function, the second one is a dependency list

  const value = { user };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
