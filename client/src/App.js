import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "./components/sidebar";
import ListadoProduct from "./components/listadoProduct";
import { ProductProvider } from "./context/productContext";
import Searchbar from "./components/searchbar";
import DeleteFilter from "./components/deleteFilter";
import PriceFilter from "./components/priceFilter";
import OrderingFilter from "./components/orderingFilter";
import Footer from "./components/footer";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Container fluid className="mt-5 mb-5">
          <Row className="g-2 ml-5">
            <div className="col-md-3">
              <Searchbar />
              <Sidebar />
              <PriceFilter />
              <DeleteFilter />
            </div>
            <div className="col-md-8 ml-5">
              <Row className="g-2">
                <OrderingFilter />
                <ListadoProduct />
              </Row>
            </div>
          </Row>
          <Footer />
        </Container>
      </div>
    </ProductProvider>
  );
}

export default App;
