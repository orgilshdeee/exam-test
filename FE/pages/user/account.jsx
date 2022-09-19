import React from "react";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function account() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user") || ""));
    }
  }, []);
  console.log(user);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function submitHandler(e) {
    e.preventDefault();
    const address = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const id = user?._id;
    axios
      .put(`http://localhost:4000/v1/users/update/?id=${id}`, {
        address: address,
        email: email,
        phone: phone,
      })
      .then((res) => {
        res.status;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="container">
      <Header />
      <div className="profile">
        <div className="profileContainer">
          <div className="profileLeft">
            <p>Profile</p>
            <p>My Listings</p>
            <p>Settings</p>
          </div>
          <div className="userEdit">
            <img src="../pictures/profile.png" alt="" />
            <div className="user">
              <p>{user?.first_name}</p>
              <Button onClick={handleOpen}>Edit Profile</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="updateForm">
                    <p>Update Your Profile</p>
                    <form onSubmit={submitHandler}>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder={user?.address}
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={user?.email}
                      />
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder={user?.phone}
                      />
                      <button type="submit">Update</button>
                    </form>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
