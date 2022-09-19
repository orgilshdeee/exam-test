import React from "react";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerInside">
        <div className="footerLeftSide">
          <a href="/">
            <img src="./pictures/logo.png" alt="" />
          </a>
        </div>
        <div className="footerCenter">
          <p>HOW IT WORKS</p>
          <p>Buying a Car</p>
          <p>Selling a Car</p>
          <p>Finalzing the Sale</p>
          <p>FAQs</p>
        </div>
        <div className="footerCenter">
          <p>SELLERS</p>
          <p>Submit Your Car</p>
          <p>Photography Guide</p>
        </div>
        <div className="footerCenter">
          <p>HELPFUL LINKS</p>
          <p>Support</p>
          <p>Shop C and B Merch</p>
        </div>
        <div className="footerRightSide">
          <div className="footerRightSideTop">
            <AiFillInstagram />
            <AiFillYoutube />
            <AiFillFacebook />
            <AiFillTwitterSquare />
          </div>
          <div className="footerRightSideBottom">
            <p>© Copyright 2022 LiveTime and Card Auction LLC</p>
            <p>Terms of Use Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
