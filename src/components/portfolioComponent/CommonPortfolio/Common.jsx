import { Container, Form } from "react-bootstrap";
import "./Common.css";
const Common = () => {
  return (
    <div className="Common">
      <Container>
        <div className="CommonPortfolioContainer">
          <h1>Product Portfolio</h1>
          <p>Find out more about our product range below.</p>
          <div className="filterProducts">
            <Form.Control
              type="text"
              id="inputText"
              placeholder="Find Products"
              className="searchInput"
            />
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Common;
