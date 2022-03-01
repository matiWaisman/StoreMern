import "../stylesheets/searchbar.scss";
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/productContext";
import SearchbarLoader from "./loaders/searchbarLoader";

const Searchbar = () => {
  const [showLoader, setShowLoader] = useState(true);
  const { search, setSearch } = useContext(ProductContext);
  const [textSearch, setTextSearch] = useState("");

  const handleChange = (e) => {
    setTextSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(textSearch);
    setTextSearch("");
  };

  useEffect(() => {
    setInterval(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  if (showLoader === false) {
    return (
      <div className="d-flex justify-content-between mt-2">
        <section className="search">
          <form onSubmit={handleSubmit} className="search__form">
            <input
              id="basic-search"
              className="search__input"
              type="text"
              name="text"
              placeholder="I am looking for..."
              onChange={handleChange}
              required
              value={textSearch}
            />
            <button className="search__btn-submit">Search</button>
          </form>
        </section>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-between mt-2">
      <SearchbarLoader />
    </div>
  );
};

export default Searchbar;
