import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const addUser = async newUser => {
    await axios.post(API, newUser);
  };

  function createUser(username, password) {
    if (!username || !password) {
      alert("Some inputs are empty!");
      return;
    }

    let newUser = {
      username,
      password,
    };

    addUser(newUser);

    navigate("/login");
  }

  const logout = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("username");
    setUser("");
    navigate("/");
  };

  async function login(username, password) {
    if (!username || !password) {
      alert("Some inputs are empty!");
      return;
    }

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    setUser(username);

    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => {
        data.map(item => {
          if (item.username == username && item.password == password) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            navigate("/");
          }
        });
      });
  }

  return (
    <authContext.Provider
      value={{
        user,
        error,

        addUser,
        login,
        createUser,
        logout,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
