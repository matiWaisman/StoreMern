import "../App.css";
import Card from "react-bootstrap/Card";
import Rating from "./rating";
import "../stylesheets/featuredProduct.css";

const ProductFeatured = (props) => {
  const porcentaje = Math.floor(getRandomArbitrary(10, 15));
  const discount = (props.product.price / 100) * porcentaje;
  const originalPrice = props.product.price + discount;
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  return (
    <div className="col-md-4 mb-3">
      <Card className="shadow-sm  h-100 w-100 center-image border border-info rounded">
        <Card.Body className="p-4 flex-fill img-holder">
          <img
            src={props.product.img}
            className="img-fluid d-block mx-auto mb-3"
          />
        </Card.Body>
        <Card.Body className="d-flex flex-column">
          <div className="mt-auto text-center">
            <h5>{props.product.name}</h5>
            <h6 className="original-price">${originalPrice}</h6>
            <div className="center-horizontal">
              <div className="inline">
                <h6>${props.product.price}</h6>
                <h6 className="porcentaje">%{porcentaje} off</h6>
              </div>
            </div>
            <Rating rating={props.product.rating}></Rating>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductFeatured;
