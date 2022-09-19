import useSWR from "swr";
import axios from "axios";
import Link from "next/link";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} = require("@mui/material");

const productList = () => {
  const productApi = "http://localhost:4000/v1/products";
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(productApi, fetcher);
  return (
    <div>
      <TableContainer variant="outlined">
        <Table aria-label="demo table">
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Odometer</TableCell>
              <TableCell>Product Style</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Engine Type</TableCell>
              <TableCell>Product status</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Purchase</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data &&
              data.data.map((d) => {
                return (
                  <TableRow>
                    <TableCell>{d._id}</TableCell>
                    <TableCell>{d.product_name}</TableCell>
                    <TableCell>{d.odometer}</TableCell>
                    <TableCell>{d.body_style}</TableCell>
                    <TableCell>{d.color}</TableCell>
                    <TableCell>{d.engine_type}</TableCell>
                    <TableCell>
                      {d.product_status ? "active" : "inactive"}
                    </TableCell>
                    <TableCell>{d.price}$</TableCell>
                    <TableCell
                      onClick={() => {
                        console.log("edit clicked");
                      }}
                    >
                      <Link href={`/roles/edit/${d._id}`}>Edit</Link>
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        console.log("delete clicked");
                        axios.delete(
                          `http://localhost:4000/v1/products/${d._id}`
                        );
                      }}
                    >
                      Delete
                    </TableCell>
                    <TableCell>
                      <Link href={`/payment/${d._id}`}>Purchase</Link>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Link href="/product/add">
        <button type="button">ADD PRODUCT</button>
      </Link>
      <div>
        {data?.data &&
          data.data.map((e) => {
            return <img src={e.imgUrl} alt="" />;
          })}
      </div>
    </div>
  );
};

export default productList;
