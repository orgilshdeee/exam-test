import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { GiCityCar } from "react-icons/gi";
import { useRouter } from "next/router";

export default function AfterLogin() {
  const router = useRouter();

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <>
      <div className="headerRightSide">
        <AiOutlineStar />

        <GrNotification />

        <GiCityCar onClick={myFunction} className="dropbtn" />
      </div>
      <div className="dropdown">
        <div id="myDropdown" className="dropdown-content">
          <div className="dropdownTop">
            <a href="/user/account">Profile</a>
            <img src="../pictures/profile.png" alt="" />
          </div>
          <a href="#">My listings</a>
          <a
            onClick={() => {
              localStorage.clear();
              location.reload();
            }}
          >
            Sign Out
          </a>
        </div>
      </div>
    </>
  );
}
