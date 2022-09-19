import React from "react";
import AfterLogin from "./login/AfterLogin";
import BeforeLogin from "./login/BeforeLogin";
import { useEffect, useState } from "react";
export default function Header() {
  const [temp, setTemp] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setTemp(true);
      setUser(JSON.parse(localStorage.getItem("user") || ""));
    }
  }, []);
  console.log(user);

  return (
    <div className="containerHeader">
      <div className="header">
        <div className="headerLeftSide">
          <img src="../pictures/logo.png" alt="" />
          <a href="/auction">Auction</a>
          <a href="/allcars">All Cars</a>
        </div>
        <div className="headerCenter">
          <form action="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for cars(ex. BMW, Audi, Ford)"
            />
          </form>
        </div>
        {temp ? <AfterLogin /> : <BeforeLogin />}
      </div>
    </div>
  );
}
