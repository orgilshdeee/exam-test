import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const rolesByIdApi = `http://localhost:4000/v1/roles/${id}`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(rolesByIdApi, fetcher);
  console.log(data);
  return (
    <form action="PUT" url="/">
      <label htmlFor="role_name">Role name</label>
      <input
        name="role_name"
        defaultValue={data && data.data?.role_name}
      ></input>
      <br />
      <label htmlFor="role_status">Role Status</label>
      <input
        name="role_status"
        defaultValue={data && data.data?.role_status}
      ></input>
      <br />
      <button type="submit">Click me</button>
    </form>
  );
};

export default EditPage;
