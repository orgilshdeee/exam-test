import { TableRow, TableCell, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { SubSubTable } from "./SubSubTable";
import axios from "axios";


export const SubTables = ({ data, i }) => {
  const handlechild = async () => {};
  const [isOpen, setIsOpen] = React.useState(false);
  const handledelete = async (e) => {
    await axios.delete(`http://localhost:4000/v1/category/${e}`).then((res) => {
      if (res.status === 200) {
        location.reload();
      }
    });
  };

  return (
    <>
      <TableRow key={i}>
        <TableCell
          style={{
            fontWeight: "medium",
            paddingLeft: "40px",
          }}
        >
          - - {data._id}
        </TableCell>
        <TableCell
          style={{
            fontWeight: "medium",
            paddingLeft: "40px",
          }}
        >
          {data.name}
        </TableCell>
        <TableCell
          style={{
            fontWeight: "medium",
            paddingLeft: "40px",
          }}
        >
          {data.status}
        </TableCell>
        <TableCell onClick={() => {}}>
          <Button
            style={{
              fontWeight: "medium",
              paddingLeft: "40px",
            }}
          >
            <Link href={`/categories/edit/${data._id}`}>edit</Link>
          </Button>
        </TableCell>
        <TableCell onClick={() => {}}>
          <Button
            style={{
              fontWeight: "medium",
              paddingLeft: "40px",
            }}
            onClick={() => {
              handledelete(data._id);
            }}
          >
            Delete
          </Button>
        </TableCell>

        <TableCell>
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {data.children.length > 0 ? (isOpen  ? "close" : "open") : null}
          </Button>
        </TableCell>
      </TableRow>
      {isOpen &&
        data.children.length > 0 &&
        data.children.map((e, i) => {
          return <SubSubTable data={e} key={i} />;
        })}
    </>
  );
};
