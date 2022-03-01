import React from "react";
import "../App.css";
import "../rating.scss";

const Rating = (props) => {
  return (
    <>
      <div className="rating-holder">
        <div
          className="c-rating c-rating--small"
          data-rating-value={props.rating}
        >
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
      </div>
    </>
  );
};

export default Rating;
