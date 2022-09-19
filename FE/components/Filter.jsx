import React from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function Filter() {
  return (
    <div className="filterContainer">
      <div className="filter">
        <div className="filterLeftSide">
          <p>Auctions</p>
          <button>
            Years
            <AiOutlineDown />
          </button>
          <div id="dropDownYear">
            <select name="years" id="years"></select>
          </div>
          <button>
            Transmission
            <AiOutlineDown />
          </button>
          <button>
            Body Style
            <AiOutlineDown />
          </button>
        </div>
        <div className="filterRightSide">
          <button className="">Ending soon</button>
          <button>Newly listed</button>
          <button>No reserve</button>
        </div>
      </div>
    </div>
  );
}
