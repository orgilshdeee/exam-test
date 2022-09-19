import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

export default function AddUserModal({ openAddUser, handleCloseAddUser }) {
  const [roles, setRoles] = useState();
  const [role, setRole] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/v1/roles").then((res) => {
      setRoles(res.data.data);
    });
  }, []);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  function submitHandler(e) {
    axios
      .post(`http://localhost:4000/v1/users/create`, {
        email: e.target.email.value,
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
        role_id: role,
        user_status: e.target.user_status.value,
        password: e.target.password.value,
      })
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <div>
      <Modal
        open={openAddUser}
        onClose={handleCloseAddUser}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={submitHandler}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add User
          </Typography>
          <TextField
            label="Email"
            name="email"
            required
            type="email"
          ></TextField>
          <TextField label="First Name" name="first_name" required></TextField>
          <TextField label="Last Name" name="last_name" required></TextField>
          <TextField
            label="Phone Number"
            name="phone"
            required
            type="number"
          ></TextField>
          <TextField label="Address" name="address" required></TextField>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={role}
              onChange={handleChange}
              label="Role"
            >
              {roles?.map((role, i) => {
                return (
                  <MenuItem key={i} value={role._id}>
                    {role.role_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField label="Status" name="user_status" required></TextField>
          <TextField
            label="Password"
            name="password"
            required
            type="password"
          ></TextField>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
