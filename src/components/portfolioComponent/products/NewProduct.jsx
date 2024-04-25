import { Col, Row } from "react-bootstrap";
import Product from "./Product";

const NewProduct = () => {
  return (
    <div className="products newProduct">
      <h2>NEW PRODUCT</h2>
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
  );
};

export default NewProduct;
