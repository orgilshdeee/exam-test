import { TableRow ,TableCell ,Button  } from '@mui/material';
import Link from "next/link";
import React from 'react'
import axios from "axios";



export const SubSubTable = ({data,i  }) => {
    const handlechild = async () => {};
    const handledelete = async (e) => {
      await axios.delete(`http://localhost:4000/v1/category/${e}`).then((res) => {
        if (res.status === 200) {
          location.reload();
        }
      });
    };
 
    return (
          <TableRow  key={i}  >
            <TableCell style={{fontWeight: 'light',  fontStyle: 'oblique' , paddingLeft:"60px" }}>- - {data._id}</TableCell>
            <TableCell style={{fontWeight: 'light',  fontStyle: 'oblique', paddingLeft:"60px" }}>{data.name}</TableCell>
            <TableCell style={{fontWeight: 'light',  fontStyle: 'oblique', paddingLeft:"60px" }}>{data.status}</TableCell>
            <TableCell onClick={() => {}}>
                    <Button style={{fontWeight: 'light',  fontStyle: 'oblique', paddingLeft:"60px" }}>
                      <Link href={`/categories/edit/${data._id}`}>Edit</Link>
                    </Button>
                  </TableCell>
                  <TableCell onClick={() => {}} >
                    <Button style={{fontWeight: 'light',  fontStyle: 'oblique', paddingLeft:"60px" }}
                      onClick={() => {
                        handledelete(data._id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  
                  <TableCell></TableCell>
          </TableRow>
        );
  
}
