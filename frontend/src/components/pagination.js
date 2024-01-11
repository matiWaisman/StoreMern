import "../App.css";
import React from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length === 1) {
    return <></>;
  } else {
    return (
      <div className="d-flex justify-content-center">
        {pageNumbers.map((page) => (
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={() => paginate(page)}
            id={page}
            value={page}
            name={page}
            key={page}
          >
            {page}
          </button>
        ))}
      </div>
    );
  }
};

export default Pagination;
