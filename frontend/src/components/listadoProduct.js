import "../App.css";
import Product from "./product";
import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/productContext";
import Pagination from "./pagination";
import NoMatch from "./noMatch";
import CardsLoader from "./loaders/cardsLoader";

const ListadoProduct = () => {
  const { productList } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFistCard = indexOfLastCard - cardsPerPage;
  const currentCards = productList.slice(indexOfFistCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (showLoader === true) {
    return <CardsLoader />;
  }

  if (productList.length === 0) {
    return <NoMatch />;
  }

  return (
    <>
      {currentCards.map((product, i) => (
        <Product product={product} key={i}></Product>
      ))}
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={productList.length}
        paginate={paginate}
      />
    </>
  );
};

export default ListadoProduct;
