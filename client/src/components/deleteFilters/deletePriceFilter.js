import "../../App.css";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { ImCross } from "react-icons/im";

const DeletePriceFilter = () => {
  const { minFilter, setMinFilter, maxFilter, setMaxFilter } =
    useContext(ProductContext);
  const handleClick = (e) => {
    setMinFilter("");
    setMaxFilter("");
  };

  if (minFilter !== "" && maxFilter !== "") {
    return (
      <div className="child">
        <button onClick={handleClick} className="delete-filter" name="text">
          <span className="delete-span p-2">
            {minFilter} - {maxFilter}
          </span>
          <div className="m-2">
            <ImCross />
          </div>
        </button>
      </div>
    );
  }

  return <></>;
};

export default DeletePriceFilter;
