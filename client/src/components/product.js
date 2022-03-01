import "../App.css";
import Card from "react-bootstrap/Card";
import Rating from "./rating";
import FeaturedProduct from "./featuredProduct";

const Product = (props) => {
  if (props.product.featured === true) {
    return <FeaturedProduct product={props.product} />;
  }
  return (
    <div className="col-md-4 mb-3">
      <Card className="shadow-sm  h-100 w-100 center-image border border-info rounded">
        <Card.Body className="p-4 flex-fill img-holder">
          <img src={props.product.img} className="img-fluid d-block mx-auto" />
        </Card.Body>
        <Card.Body className="text-center d-flex flex-column">
          <div className="mt-auto">
            <h5>{props.product.name}</h5>
            <h6>${props.product.price}</h6>
            <Rating rating={props.product.rating}></Rating>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
