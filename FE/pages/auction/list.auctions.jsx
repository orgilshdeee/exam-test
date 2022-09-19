const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Box,
  TextField,
} = require("@mui/material");
import Modal from "@mui/material/Modal";
import * as React from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles({
  root: {
    width: "100px",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    border: "1px solid #000",
    boxShadow: 24,
    padding: "20px",
    borderRadius: "5px",
    p: 4,
  },
  input: {
    width: "100%",
    margin: "5px",
  },
});

const auction = [
  "Action Status",
  "Auction Description",
  "Auction Image",
  "Auction Seller Id",
  "Bidding End Time",
  "Bidding Start Time",
  "Created Date",
  "Ending Bid",
  "Max Ending Bid",
  "Min Starting Bid",
  "Starting Bid",
  "Updated Date",
];

export default function AuctionList() {
  const rolesApi = "http://localhost:4000/v1/auction";
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(rolesApi, fetcher);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleDlt(id) {
    axios.delete(`http://localhost:4000/v1/auction/${id}`);
    alert("delete");
  }
  const classes = useStyles();
  // const [values, setValues] = useState({
  //   title: "",
  //   video: "",
  //   description: "",
  //   genre: "",
  //   redirect: false,
  //   error: "",
  //   mediaId: "",
  // });
  // const handleChange = (name) => (event) => {
  //   const value = name === "video" ? event.target.files[0] : event.target.value;
  //   setValues({ ...values, [name]: value });
  // };

  function createHandler(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/v1/auction`, {
        auction_status: e.target.action_status.value,
        auction_description: e.target.auction_description.value,
        auction_item_image: e.target.auction_item_image.value,
        auction_name: e.target.auction_name.value,
        auction_seller_id: e.target.auction_seller_id.value,
        bidding_end_time: e.target.bidding_end_time.value,
        bidding_start_time: e.target.bidding_start_time.value,
        created_date: e.target.created_date.value,
        ending_bid: e.target.ending_bid.value,
        max_ending_bid: e.target.max_ending_bid.value,
        min_starting_bid: e.target.min_starting_bid.value,
        starting_bid: e.target.starting_bid.value,
        updated_date: e.target.updated_date.value,
      })
      .then((res) => {
        if (res.status == 200) {
          alert("update");
          setRegister(false);
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      });
  }

  var date = new Date();
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.root}>Action Status</TableCell>
              <TableCell className={classes.root}>
                Auction Description
              </TableCell>
              <TableCell className={classes.root}>Auction Image</TableCell>
              <TableCell className={classes.root}>Auction Name</TableCell>
              <TableCell className={classes.root}>
                Auction <br />
                Seller Id
              </TableCell>
              <TableCell className={classes.root}>Bidding End Time</TableCell>
              <TableCell className={classes.root}>Bidding Start Time</TableCell>
              <TableCell className={classes.root}>Created Date</TableCell>
              <TableCell className={classes.root}>Ending Bid</TableCell>
              <TableCell className={classes.root}>Max Ending Bid</TableCell>
              <TableCell className={classes.root}>Min Starting Bid</TableCell>
              <TableCell className={classes.root}>Starting Bid</TableCell>
              <TableCell className={classes.root}>Updated Date</TableCell>
              <TableCell className={classes.root}>Edit</TableCell>
              <TableCell className={classes.root}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((auction, i) => (
                <TableRow key={i}>
                  <TableCell className={classes.root}>
                    {auction.action_status}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.auction_description}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.auction_item_image}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.auction_name}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.auction_seller_id}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.bidding_end_time}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.bidding_start_time}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.created_date}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.ending_bid}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.max_ending_bid}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.min_starting_bid}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.starting_bid}
                  </TableCell>
                  <TableCell className={classes.root}>
                    {auction.updated_date}
                  </TableCell>
                  <TableCell className={classes.root}>
                    <Link href={`/auction/edit/${auction._id}`}>
                      <EditIcon />
                    </Link>
                  </TableCell>
                  <TableCell className={classes.root}>
                    <Button onClick={() => handleDlt(auction._id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={handleOpen}
        sx={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyItems: "center",
          marginTop: "20px",
        }}
      >
        <AddIcon />
      </Button>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component="form"
            className={classes.modal}
            noValidate
            autoComplete="off"
            onSubmit={createHandler}
          >
            <TextField
              id="standard-basic"
              label="action status"
              variant="standard"
              name="action_status"
              className={classes.input}
            />
            <TextField
              id="standard-basic"
              label="auction description"
              variant="standard"
              name="auction_description"
              className={classes.input}
            />
            <TextField
              id="standard-basic"
              label="auction item image"
              variant="standard"
              name="auction_item_image"
              className={classes.input}
            />

            <TextField
              id="standard-basic"
              label="auction name"
              variant="standard"
              name="auction_name"
              className={classes.input}
            />
            <TextField
              id="standard-basic"
              label="auction seller id"
              variant="standard"
              name="auction_seller_id"
              className={classes.input}
            />
            <TextField
              label="bidding end time"
              variant="standard"
              name="bidding_end_time"
              className={classes.input}
              defaultValue="00:00"
              type="time"
              required
            />
            <TextField
              id="standard-basic"
              label="bidding start time"
              variant="standard"
              name="bidding_start_time"
              className={classes.input}
              defaultValue="00:00"
              type="time"
              required
            />
            <TextField
              id="standard-basic"
              label="created date"
              variant="standard"
              name="created_date"
              type="date"
              defaultValue={date.toISOString().slice(0, 10)}
              className={classes.input}
            />
            <TextField
              id="standard-basic"
              label="ending bid"
              variant="standard"
              name="ending_bid"
              className={classes.input}
            />

            <TextField
              id="standard-basic"
              label="max ending bid"
              variant="standard"
              name="max_ending_bid"
              className={classes.input}
            />
            <TextField
              id="standard-basic"
              label="min starting bid"
              variant="standard"
              name="min_starting_bid"
              className={classes.input}
            />
            <TextField
              id="standard-basic"
              label="starting bid"
              variant="standard"
              name="starting_bid"
              className={classes.input}
            />
            <TextField
              id="standard-basic"
              label="updated date"
              variant="standard"
              name="updated_date"
              type="date"
              defaultValue={date.toISOString().slice(0, 10)}
              className={classes.input}
            />
            <Button type="submit">submit</Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
