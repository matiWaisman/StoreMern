import "../App.css";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import SidebarLoader from "./loaders/sidebarLoader";

const Sidebar = () => {
  const [showLoader, setShowLoader] = useState(true);
  const {
    brandFilter,
    setBrandFilter,
    brands,
    amountBrandProducts,
    checked,
    setChecked,
  } = useContext(ProductContext);

  let copyChecked = checked;

  const handleClick = (e) => {
    var isEqual = -1;
    for (var i = 0; i < brandFilter.length; i++) {
      if (e.target.value === brandFilter[i]) {
        isEqual = i;
      }
    }
    if (isEqual === -1) {
      setBrandFilter((old) => [...old, e.target.value]);
      copyChecked[e.target.id] = !copyChecked[e.target.id];
    } else {
      setBrandFilter(brandFilter.filter((brand) => brand !== e.target.value));
      copyChecked[e.target.id] = !copyChecked[e.target.id];
    }
    setChecked(copyChecked);
  };

  useEffect(() => {
    setInterval(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  if (showLoader === false) {
    return (
      <div className="sidebar p-2 mr-5">
        <div className="heading d-flex justify-content-between align-items-center">
          <h6 className="text-uppercase">Brands</h6>
          <span>{brands.length}</span>
        </div>
        {brands.map((brand, i) => (
          <div className="d-flex justify-content-between mt-2">
            <div className="form-check" key={i}>
              <input
                className="form-check-input"
                type="checkbox"
                value={brand}
                id={i}
                onChange={handleClick}
                name="brandName"
                checked={checked[i]}
              ></input>
              <label className="form-check-label"> {brand} </label>
            </div>
            <span> {amountBrandProducts[i]}</span>
          </div>
        ))}
      </div>
    );
  }
  return <SidebarLoader brands={brands} />;
};

export default Sidebar;
