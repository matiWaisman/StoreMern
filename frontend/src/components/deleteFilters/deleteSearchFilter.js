import "../../App.css";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { ImCross } from "react-icons/im";

const DeleteSearchFilter = () => {
  const { search, setSearch } = useContext(ProductContext);
  const handleSearch = (e) => {
    setSearch("");
  };

  if (search !== "") {
    return (
      <div className="child">
        <button
          onClick={handleSearch}
          className="delete-filter"
          name="search"
          value={search}
        >
          <span className="delete-span p-2"> {search}</span>
          <div className="m-2">
            <ImCross />
          </div>
        </button>
      </div>
    );
  }

  return <></>;
};

export default DeleteSearchFilter;
