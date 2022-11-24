import React, { useState } from "react";
// import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/RegistrationPage.css";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useAuth();

  return (
    <div className="register" style={{ height: "68vh" }}>
      <h2>Registration</h2>
      <TextField
        id="filled-basic"
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        variant="filled"
      />
      <br />
      <TextField
        id="filled-basic"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        variant="filled"
      />
      <br />

      <Button
        variant="contained"
        onClick={() => createUser(username, password)}>
        Sign In
      </Button>
    </div>
  );
};

export default RegistrationPage;
