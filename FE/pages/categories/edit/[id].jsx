import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { Box, Button, TextField, Typography, FormControl } from "@mui/material";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const rolesByIdApi = `http://localhost:4000/v1/category/${id}`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(rolesByIdApi, fetcher);

  function submitHandler(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/v1/category?id=${id}`, {
        name: e.target.name.value,
        slug: e.target.slug.value,
        status: e.target.status.value,
        parentId: e.target.parentId.value,
      })
      .then((res) => {
        if (res.status === 200) {
          router.push("/categories/list.categories");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return data ? (
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
      <Typography>Edit Category</Typography>
      <TextField
        label="Name"
        defaultValue={data?.name}
        name="name"
      ></TextField>
      <TextField
        label="Slug"
        defaultValue={data?.slug}
        name="slug"
      ></TextField>
      <TextField
        label="Status"
        defaultValue={data?.status}
        name="status"
      ></TextField>
      <TextField
        label="Parent Id"
        defaultValue={data?.parentId}
        name="parentId"
      ></TextField>
      <Button variant="contained" type="submit">
        Save
      </Button>
    </Box>
  ) : null;
};

export default EditPage;
