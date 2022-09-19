import React from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} = require("@mui/material");
function CompanyLists() {
  const companyApi = "http://localhost:4000/v1/company";
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error, mutate } = useSWR(companyApi, fetcher);
  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:4000/v1/company/${e}`)
      .then((res) => {
        if (res.status === 200) {
          mutate();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <TableContainer variant="outlined">
      <Table aria-label="demo table">
        <TableHead>
          <TableRow>
            <TableCell>Company ID</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.data.map((d, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{d._id}</TableCell>
                  <TableCell>{d.company_name}</TableCell>
                  <TableCell>{d.email}</TableCell>
                  <TableCell>{d.address}</TableCell>
                  <TableCell>{d.phoneNumber}</TableCell>
                  <TableCell>{d.role_id.role_name}</TableCell>
                  <TableCell
                    onClick={() => {
                      console.log("edit clicked");
                    }}
                  >
                    <Link href={`/company/edit/${d._id}`}>Edit</Link>
                  </TableCell>
                  <TableCell onClick={() => handleDelete(d._id)}>
                    Delete
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CompanyLists;
