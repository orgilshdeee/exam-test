import * as React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { Typography, TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddCategory({
  handleOpen,
  handleClose,
  open,
  setOpen,
}) {
  function submitHandler(e) {
    const parentid =  e.target.parentId.value ? e.target.parentId.value : null
    console.log(parentid);
    e.preventDefault();
    axios
      .post(`http://localhost:4000/v1/category/create`, {
        name: e.target.name.value,
        status: e.target.status.value,
        slug: e.target.slug.value,
        parentId: parentid,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200 || res.status=== 201) {
          console.log("amjilttai");
          location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            }}
            onSubmit={submitHandler}
          >
            <Typography>Edit Category</Typography>
            <TextField label="Category Name" name="name"></TextField>
            <TextField label="Category status" name="status"></TextField>
            <TextField label="Slug" name="slug"></TextField>
            <TextField label="Parent Id" name="parentId"></TextField>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
