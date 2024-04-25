import { Col, Container, Row } from "react-bootstrap";
import "./Products.css";
import Product from "./Product";
import NewProduct from "./NewProduct";
const ProductList = () => {
  return (
    <div className="ProductList">
      <Container>
        <button className="contactBtn makeBtn">Make Your Order</button>
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
