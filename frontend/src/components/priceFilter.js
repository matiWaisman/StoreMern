import React, { useState, useContext } from "react";
import "../stylesheets/priceFilter.css";
import { ProductContext } from "../context/productContext";
import { AiOutlineSearch } from "react-icons/ai";

const PriceFilter = () => {
  const { productList, setMinFilter, setMaxFilter } =
    useContext(ProductContext);
  var min = 1000;
  var max = 0;

  for (var i = 0; i < productList.length; i++) {
    if (productList[i].price < min) {
      min = productList[i].price;
    }
    if (productList[i].price > max) {
      max = productList[i].price;
    }
  }

  const [minValue, setMinValue] = useState("");

  const handleMin = (e) => {
    setMinValue({
      ...minValue,
      [e.target.name]: e.target.value,
    });
  };

  const [maxValue, setMaxValue] = useState("");

  //const { valueMax } = maxValue;

  const handleMax = (e) => {
    setMaxValue({
      ...maxValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMaxFilter(maxValue.maxValue);
    setMinFilter(minValue.minValue);
    setMaxValue({
      ...maxValue,
      maxValue: "",
    });
    setMinValue({
      ...minValue,
      minValue: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <li>
        <section className="ui-search-price-filter ui-search-filter-range--price">
          <div className="ui-search-price-filter-container">
            <label className="andes-form-control andes-form-control--textfield andes-form-control--textbox">
              <div className="andes-form-control__control">
                <input
                  id="Minimum-price"
                  placeholder="Mínimo"
                  type="number"
                  className="andes-form-control__field"
                  value={minValue.minValue}
                  name="minValue"
                  onChange={handleMin}
                ></input>
              </div>
              <div className="andes-form-control__border"></div>
              <span className="andes-form-control__message"></span>
            </label>
          </div>
          <div className="ui-search-price-filter-container">
            <label className="andes-form-control andes-form-control--textfield andes-form-control--textbox">
              <div className="andes-form-control__control">
                <input
                  id="Maximum-price"
                  placeholder="Máximo"
                  enterKeyHint="go"
                  type="number"
                  className="andes-form-control__field"
                  value={maxValue.maxValue}
                  name="maxValue"
                  onChange={handleMax}
                ></input>
                <div className="andes-form-control__embedded"> </div>
              </div>
              <div className="andes-form-control__border"></div>
              <span className="andes-form-control__message"></span>
            </label>
          </div>
          <AiOutlineSearch className="search-icon">
            <button
              data-testid="submit-price"
              type="submit"
              className="submit-search"
              disabled=""
              aria-label="Aplicar"
            ></button>
          </AiOutlineSearch>
        </section>
      </li>
    </form>
  );
};

export default PriceFilter;
