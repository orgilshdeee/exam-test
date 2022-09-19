import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Button, TextField, Typography, FormControl } from "@mui/material";
import { InputLabel, Select, MenuItem } from "@mui/material";
import useSWR from "swr";
import axios from "axios";

function EditUser() {
  const [roles, setRoles] = useState();
  const [role, setRole] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      return res.data.data;
    });

  const { data, error } = useSWR(
    `http://localhost:4000/v1/users/${id}`,
    fetcher
  );

  useEffect(() => {
    axios.get("http://localhost:4000/v1/roles").then((res) => {
      setRoles(res.data.data);
    });
  }, []);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  function submitHandler(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/v1/users/update?id=${id}`, {
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
        if (res.status === 200) {
          router.push("/users/users");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      {data ? (
        <div>
          <Box
            component="form"
            style={{
              backgroundColor: "white",
              color: "black",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
            onSubmit={submitHandler}
          >
            <Typography>Edit User</Typography>
            <TextField
              label="Email"
              defaultValue={data.email}
              name="email"
            ></TextField>
            <TextField
              label="First Name"
              defaultValue={data.first_name}
              name="first_name"
            ></TextField>
            <TextField
              label="Last Name"
              defaultValue={data.last_name}
              name="last_name"
            ></TextField>
            <TextField
              label="Phone Number"
              defaultValue={data.phone}
              name="phone"
            ></TextField>
            <TextField
              label="Address"
              defaultValue={data.address}
              name="address"
            ></TextField>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Role
              </InputLabel>
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
            <TextField
              label="user_status"
              defaultValue={data.user_status}
              name="user_status"
            ></TextField>
            <TextField
              label="Password"
              defaultValue={data.password}
              name="password"
            ></TextField>

            <Button variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </div>
      ) : null}
    </>
  );
}

export default EditUser;
