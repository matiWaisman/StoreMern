import "../../App.css";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { ImCross } from "react-icons/im";

const DeleteBrandFilter = () => {
  const { brands, brandFilter, setBrandFilter, checked, setChecked } =
    useContext(ProductContext);

  let copyChecked = checked;

  const handleClick = (e) => {
    var position = 0;
    for (var i = 0; i < brands.length; i++) {
      if (brands[i] == e.target.value) {
        position = i;
      }
    }
    setBrandFilter(brandFilter.filter((filter) => filter !== e.target.value));
    copyChecked[position] = false;
    setChecked(copyChecked);
  };

  return brandFilter.map((filter, i) => (
    <div className="child">
      <button onClick={handleClick} className="delete-filter" value={filter}>
        <span className="p-2"> {filter}</span>
        <div className="m-2">
          <ImCross />
        </div>
      </button>
    </div>
  ));
};

export default DeleteBrandFilter;
