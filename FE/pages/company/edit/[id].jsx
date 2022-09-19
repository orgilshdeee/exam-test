import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
function EditInfo({ role }) {
  const router = useRouter();
  const { id } = router.query;
  const rolesByIdApi = `http://localhost:4000/v1/company/${id}`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(rolesByIdApi, fetcher);
  const handlerUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/v1/company/?id=${id}`, {
        company_name: e.target.companyName.value,
        email: e.target.email.value,
        address: e.target.address.value,
        phoneNumber: e.target.phoneNumber.value,
        role_id: e.target.role.value,
      })
      .then((res) => {
        if (res.status === 200) {
          router.push("/company/company.list");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handlerUpdate}>
        <label htmlFor="company_name">Company name</label>
        <input
          type="text"
          name="companyName"
          defaultValue={data && data.company_name}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" defaultValue={data && data.email} />
        <br />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" defaultValue={data && data.address} />
        <br />
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="text"
          name="phoneNumber"
          defaultValue={data && data.phoneNumber}
        />
        <br />
        <label htmlFor="role_id">Role</label>
        <select name="role" id="role" defaultValue={data && data.role_id}>
          {role.map((eachRole, index) => {
            return (
              <option key={index} value={eachRole._id}>
                {eachRole.role_name}
              </option>
            );
          })}
        </select>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
EditInfo.getInitialProps = async () => {
  const res = await axios.get("http://localhost:4000/v1/roles");
  const json = res.data.data;
  return { role: json };
};
export default EditInfo;
