import { useState } from "react";
import "../App.css";
import "../stylesheets/deleteFilters.css";
import DeleteSearchFilter from "./deleteFilters/deleteSearchFilter";
import DeletePriceFilter from "./deleteFilters/deletePriceFilter";
import DeleteBrandFilter from "./deleteFilters/deleteBrandFilter";
const DeleteFilter = () => {
  return (
    <div className="my-flex my-2">
      <DeleteBrandFilter />
      <DeleteSearchFilter />
      <DeletePriceFilter />
    </div>
  );
};

export default DeleteFilter;
