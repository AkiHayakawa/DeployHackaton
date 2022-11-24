import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../context/AuthContextProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  return (
    <div className="register" style={{ height: "68vh" }}>
      <h2>Log In</h2>

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

      <Button variant="contained" onClick={() => login(username, password)}>
        Log In
      </Button>
      <br />

      <a href="#" onClick={() => alert("лол вспоминай")}>
        Забыл пароль?
      </a>
    </div>
  );
};

export default LoginPage;
