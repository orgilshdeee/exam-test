import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const EditPage = ({ auction }) => {
  const router = useRouter();
  const { id } = router.query;

  const rolesByIdApi = `http://localhost:4000/v1/auction/${id}`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(rolesByIdApi, fetcher);

  const auctionFilter = auction.filter((a) => {
    if (a._id === data?._id) {
      return a;
    }
  });

  function editHandler(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/v1/auction?id=${id}`, {
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

  return (
    <>
      {auctionFilter &&
        auctionFilter.map((a, i) => {
          return (
            <Box
              component="form"
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                "& > :not(style)": { m: 1, width: "45ch" },
              }}
              onSubmit={editHandler}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="action status"
                variant="standard"
                name="action_status"
                defaultValue={a.action_status}
              />
              <TextField
                id="standard-basic"
                label="auction description"
                variant="standard"
                name="auction_description"
                defaultValue={a.auction_description}
              />
              <TextField
                id="standard-basic"
                label="auction item image"
                variant="standard"
                name="auction_item_image"
                defaultValue={a.auction_item_image}
              />
              <TextField
                id="standard-basic"
                label="auction name"
                variant="standard"
                name="auction_name"
                defaultValue={a.auction_name}
              />
              <TextField
                id="standard-basic"
                label="auction seller id"
                variant="standard"
                name="auction_seller_id"
                defaultValue={a.auction_seller_id}
              />
              <TextField
                id="standard-basic"
                label="bidding end time"
                variant="standard"
                name="bidding_end_time"
                defaultValue={a.bidding_end_time}
              />
              <TextField
                id="standard-basic"
                label="bidding start time"
                variant="standard"
                name="bidding_start_time"
                defaultValue={a.bidding_start_time}
              />
              <TextField
                id="standard-basic"
                label="created date"
                variant="standard"
                name="created_date"
                defaultValue={a.created_date}
              />
              <TextField
                id="standard-basic"
                label="ending bid"
                variant="standard"
                name="ending_bid"
                defaultValue={a.ending_bid}
              />
              <TextField
                id="standard-basic"
                label="max ending bid"
                variant="standard"
                name="max_ending_bid"
                defaultValue={a.max_ending_bid}
              />
              <TextField
                id="standard-basic"
                label="min starting bid"
                variant="standard"
                name="min_starting_bid"
                defaultValue={a.min_starting_bid}
              />
              <TextField
                id="standard-basic"
                label="starting bid"
                variant="standard"
                name="starting_bid"
                defaultValue={a.starting_bid}
              />
              <TextField
                id="standard-basic"
                label="updated date"
                variant="standard"
                name="updated_date"
                defaultValue={a.updated_date}
              />

              <Button type="submit">edit</Button>
            </Box>
          );
        })}
    </>
  );
};

export default EditPage;

EditPage.getInitialProps = async (ctx) => {
  const res = await axios.get("http://localhost:4000/v1/auction");
  const json = await res.data.data;
  return { auction: json };
};
