import "../App.css";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";
import "../stylesheets/noMatch.css";
import DeleteFilter from "./deleteFilter";

const NoMatch = () => {
  const { productList } = useContext(ProductContext);

  return (
    <>
      <div className="mx-5">
        <div className="mx-5">
          <div className="parent mx-5">
            <div className="d-flex justify-content-center">
              <h3 className="mt-3"> No matching products</h3>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p> Try deleting this filters:</p>
            </div>
            <div className="d-flex justify-content-center">
              <DeleteFilter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoMatch;
