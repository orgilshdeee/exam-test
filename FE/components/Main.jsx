import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Footer from "./Footer";
import Filter from "./Filter";

export default function Main() {
  const [products, setProduct] = React.useState();
  useEffect(() => {
    axios.get("http://localhost:4000/v1/products").then((res) => {
      setProduct(res.data.data);
    });
  }, []);

  return (
    <>
      <Filter />
      <div className="mainContainer">
        <div className="main">
          {products?.map((e, i) => {
            return (
              <div className="carCard" key={i}>
                <Link href={`/car/${e._id}`}>
                  <img src={e.imgUrl} alt="" />
                </Link>
                <p>{e.product_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
