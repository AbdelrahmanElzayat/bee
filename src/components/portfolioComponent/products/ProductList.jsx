import { Col, Container, Row } from "react-bootstrap";
import "./Products.css";
import Product from "./Product";
import NewProduct from "./NewProduct";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();
  return (
    <div className="ProductList">
      <Container>
        <button
          className="contactBtn makeBtn"
          onClick={() => navigate("/order")}
        >
          Make Your Order
        </button>
        <div className="products">
          <Row>
            <Col lg="12">
              <Product />
            </Col>
            <Col lg="12">
              <Product />
            </Col>
            <Col lg="12">
              <Product />
            </Col>
            <Col lg="12">
              <Product />
            </Col>
          </Row>
        </div>
        <NewProduct />
      </Container>
    </div>
  );
};

export default ProductList;
