import * as React from "react";
import { Paper, TableCell, Table, TableBody, TableRow } from "@mui/material";
import { Link, Button, Modal, Typography } from "@mui/material";
import { TableHead, TableContainer, Box } from "@mui/material";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useSWR from "swr";
import AddUserModal from "../../components/users/AddUserModal";

export default function Users() {
  const [open, setOpen] = React.useState(false);
  const [openAddUser, setOpenAddUser] = React.useState(false);
  const [roles, setRoles] = React.useState();
  const handleOpenAddUser = () => setOpenAddUser(true);
  const handleCloseAddUser = () => setOpenAddUser(false);
  const usersApi = "http://localhost:4000/v1/users";
  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      return res.data.data;
    });
  const { data, error } = useSWR(usersApi, fetcher);

  React.useEffect(() => {
    axios.get("http://localhost:4000/v1/roles").then((res) => {
      setRoles(res.data.data);
    });
  }, []);

  function openDeleteModal() {
    setOpen(true);
  }

  function deleteHandler(e) {
    axios.delete(`http://localhost:4000/v1/users/delete/${e}`).then((res) => {
      if (res.status === 200) {
        setOpen(false);
        location.reload();
      }
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>User Status</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((user, i) => {
            return (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>
                  {roles?.map((role) => {
                    if (role._id === user.role_id) {
                      return role.role_name;
                    }
                  })}
                </TableCell>
                <TableCell>{user.user_status}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>
                  <Link href={`/users/edit/${user._id}`}>
                    <EditIcon />
                  </Link>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      deleteHandler(user._id);
                    }}
                  >
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Link href={`/users/${user._id}`}>Profile</Link>
                </TableCell>
                <Modal
                  open={open}
                  onClose={() => {
                    setOpen(false);
                  }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bgcolor: "background.paper",
                      borderRadius: 5,
                      boxShadow: 24,
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 3,
                      color: "black",
                    }}
                  >
                    <Typography>Delete?</Typography>
                    <div style={{ display: "flex", gap: 15 }}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          deleteHandler(user._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </Box>
                </Modal>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="success"
        style={{
          width: "100%",
        }}
        onClick={handleOpenAddUser}
      >
        Add User
      </Button>
      <AddUserModal
        openAddUser={openAddUser}
        setOpenAddUser={setOpenAddUser}
        handleCloseAddUser={handleCloseAddUser}
      />
    </TableContainer>
  );
}
