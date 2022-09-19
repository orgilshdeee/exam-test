import React from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";

export default function Login() {
  function submitHandler(e) {
    axios
      .post("http://localhost:4000/v1/users/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
      });
  }
  return (
    <div>
      <Box component="form" onSubmit={submitHandler}>
        <TextField label="Email" type="email" name="email"></TextField>
        <TextField label="Password" type="password" name="password"></TextField>
        <Button type="submit">Login</Button>
      </Box>
    </div>
  );
}
