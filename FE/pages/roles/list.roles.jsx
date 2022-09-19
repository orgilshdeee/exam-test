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

const RolesList = () => {
  const rolesApi = "http://localhost:4000/v1/roles";
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(rolesApi, fetcher);
  return (
    <TableContainer variant="outlined">
      <Table aria-label="demo table">
        <TableHead>
          <TableRow>
            <TableCell>Role ID</TableCell>
            <TableCell>Role Name</TableCell>
            <TableCell>Role Status</TableCell>
            <TableCell>Role Edit</TableCell>
            <TableCell>Role Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data &&
            data?.data.map((d, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{d._id}</TableCell>
                  <TableCell>{d.role_name}</TableCell>
                  <TableCell>{d.role_status}</TableCell>
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
                    }}
                  >
                    Delete
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RolesList;
