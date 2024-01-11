import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/productContext";
import "../stylesheets/orderingFilter.css";
import OrderingFilterLoader from "./loaders/orderingFilterLoader";
const OrderingFilter = () => {
  const [showLoader, setShowLoader] = useState(true);
  const {
    orderingFilter,
    setOrderingFilter,
    featuredFilter,
    setFeaturedFilter,
  } = useContext(ProductContext);

  const handleChange = (e) => {
    setFeaturedFilter("");
    setOrderingFilter("");
  };

  const handlePrice = (e) => {
    setFeaturedFilter("");
    setOrderingFilter(e.target.value);
  };

  const handleFeatured = (e) => {
    setOrderingFilter("");
    setFeaturedFilter("true");
  };

  const handleEvery = (e) => {
    setFeaturedFilter("");
    setOrderingFilter("");
  };

  useEffect(() => {
    setInterval(() => {
      setShowLoader(false);
    }, 2000);
  }, []);
  if (showLoader === false) {
    return (
      <div className="d-flex flex-row-reverse mb-2">
        <details className="custom-select" onChange={handleChange}>
          <summary className="radios">
            <input
              type="radio"
              name="item"
              id="default"
              title="Order by:"
              defaultChecked
            ></input>
            <input
              type="radio"
              name="item"
              id="featured"
              title="Featured"
              onClick={handleFeatured}
            ></input>
            <input
              type="radio"
              name="item"
              id="-price"
              title="High to low"
              value="-price"
              onClick={handlePrice}
            ></input>
            <input
              type="radio"
              name="item"
              id="price"
              title="Low to high"
              value="price"
              onClick={handlePrice}
            ></input>
            <input
              type="radio"
              name="item"
              id="every"
              title="Every product"
              value="every"
              onClick={handleEvery}
            ></input>
          </summary>
          <ul className="list">
            <li>
              <label htmlFor="featured">Featured</label>
            </li>
            <li>
              <label htmlFor="-price">High to low</label>
            </li>
            <li>
              <label htmlFor="price">Low to high</label>
            </li>
            <li>
              <label htmlFor="every">Every product</label>
            </li>
          </ul>
        </details>
      </div>
    );
  }
  return (
    <div className="d-flex flex-row-reverse mb-2">
      <OrderingFilterLoader />
    </div>
  );
};

export default OrderingFilter;
