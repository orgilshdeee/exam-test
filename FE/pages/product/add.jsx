import axios from "axios";
import React, { useState } from "react";

export default function add() {
  const [values, setValues] = useState({
    title: "",
    image: "",
    description: "",
    genre: "",
    redirect: false,
    error: "",
  });
  const handleChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };
  function submitHandler(e) {
    e.preventDefault();
    const result = {
      product_name: e.target[0].value,
      odometer: e.target[1].value,
      vehicle_type: e.target[2].value,
      imgUrl: values.value,
      color: e.target[4].value,
      fuel: e.target[5].value,
      engine_type: e.target[6].value,
      cylinder: e.target[7].value,
      primary_damage: e.target[8].value,
    };
    axios
      .post("http://localhost:4000/v1/products", { result })
      .then((res) => {});
  }
  return (
    <div>
      <form
        action="submit"
        className="productAddForm"
        onSubmit={(e) => {
          submitHandler(e);
        }}
        encType="multipart/form-data"
      >
        <h5>Add Product</h5>
        <p>Product name</p>
        <input type="text" />
        <p>Odometer</p>
        <input type="text" />
        <p>Vehicle type</p>
        <select name="type" id="type">
          <option value="test">test</option>
        </select>
        <p>Image Url</p>
        <input type="file" accept="image/*" onChange={handleChange("image")} />
        <p>Color</p>
        <input type="text" />
        <p>fuel</p>
        <input type="text" />
        <p>Engine Type</p>
        <input type="text" />
        <p>Cylinder</p>
        <input type="text" />
        <p>Primary damage</p>
        <input type="text" />
        <button>ADD</button>
      </form>
    </div>
  );
}
