import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import * as React from "react";
import AddCategory from "../../components/Category/AddCategory";
import { SubTables } from "../../components/Category/SubTables";
import { OpenToggle } from "../../components/Category/OpenToggle";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} = require("@mui/material");

const RolesList = () => {
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const rolesApi = "http://localhost:4000/v1/category/getcategory";
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(rolesApi, fetcher);
  console.log(data);

  const handlechild = async () => {};

  const handledelete = async (e) => {
    await axios.delete(`http://localhost:4000/v1/category/${e}`).then((res) => {
      if (res.status === 200) {
        location.reload();
      }
    });
  };
  return (
    <TableContainer
      style={{
        flexDirection: "column",
        display: "flex",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table aria-label="demo table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Category ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Category Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>
              Category Status
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Category Edit</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>
              Category Delete
            </TableCell>

            <TableCell>
              <OpenToggle setIsOpen={setIsOpen} isOpen={isOpen} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data?.map((d, i) => {
              return (
                <>
                  <TableRow key={i}>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {d._id}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {d.name}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {d.status}
                    </TableCell>
                    <TableCell onClick={() => {}}>
                      <Button style={{ fontWeight: "bold" }}>
                        <Link href={`/categories/edit/${d._id}`}>Edit</Link>
                      </Button>
                    </TableCell>
                    <TableCell onClick={() => {}}>
                      <Button
                        onClick={() => {
                          handledelete(d._id);
                        }}
                        style={{ fontWeight: "bold" }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  {isOpen &&
                    d.children.length > 0 &&
                    d.children.map((e, i) => {
                      return <SubTables data={e} key={i} />;
                    })}
                </>
              );
            })}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={handleOpen}>
        Add Category
      </Button>
      <AddCategory
        setOpen={setOpen}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </TableContainer>
  );
};

export default RolesList;
