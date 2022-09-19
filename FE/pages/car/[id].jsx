import React from "react";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { BiTime, BiHash } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
export default function carCard() {
  const [cars, setCar] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const carApi = `http://localhost:4000/v1/products/${id}`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(carApi, fetcher);
  // useEffect(() => {
  //   axios.get(`http://localhost:4000/v1/products/${id}`).then((res) => {
  //     setCar(res.data);
  //     console.log(res);
  //   });
  //   console.log(cars);
  // }, []);

  return (
    <div className="container">
      <Header />
      <div className="carContainer">
        <div className="cards">
          <img src={data?.imgUrl} alt="" />
          <div className="carcard">
            <div className="carInformation">
              <div className="types">
                <p>Product name</p>
                <p>Mile age</p>
                <p>Primary damage</p>
                <p>Body style</p>
                <p>Cylinders</p>
              </div>
              <div className="informations">
                <p>{data?.product_name}</p>
                <p>{data?.odometer}</p>
                <p>{data?.primary_damage}</p>
                <p>{data?.body_style}</p>
                <p>{data?.cylinders}</p>
              </div>
              <div className="types1">
                <p>Vehicle type</p>
                <p>Color</p>
                <p>Fuel</p>
                <p>Engine type</p>
                <p></p>
              </div>
              <div className="informations1">
                <p>{data?.vehicle_type}</p>
                <p>{data?.color}</p>
                <p>{data?.fuel}</p>
                <p>{data?.engine_type}</p>
                <p></p>
              </div>
            </div>
            <div className="bid">
              <div className="timeLeft">
                <BiTime />
                <p>Time Left:</p>
              </div>
              <div className="timeLeft">
                <AiOutlineArrowUp />
                <p>High Bid:</p>
              </div>
              <div className="timeLeft">
                <BiHash />
                <p>Bids:</p>
              </div>
              <div className="timeLeft">
                <FaRegComment />
                <p>Comments:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
