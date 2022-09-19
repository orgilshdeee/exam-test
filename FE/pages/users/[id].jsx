import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import { useEffect, useState } from "react";

export default function Id() {
  const [roles, setRoles] = useState();
  const router = useRouter();
  const { id } = router.query;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      return res.data.data;
    });
  const { data, error } = useSWR(
    `http://localhost:4000/v1/users/${id}`,
    fetcher
  );
  useEffect(() => {
    axios.get("http://localhost:4000/v1/roles").then((res) => {
      setRoles(res.data.data);
    });
  }, []);

  return data ? (
    <>
      <p>First name: {data.first_name}</p>
      <p>Last Name: {data.last_name}</p>
      <p>Phone: {data.phone}</p>
      <p>User status: {data.user_status}</p>
      <p> Address: {data.address}</p>
      <p>Email: {data.email}</p>
      <p>password: {data.password}</p>
      <p>password: {data.role_id}</p>
      <p>
        Role:{" "}
        {roles?.map((role) => {
          if (role._id === data.role_id) {
            return role.role_name;
          }
        })}
      </p>
    </>
  ) : null;
}
