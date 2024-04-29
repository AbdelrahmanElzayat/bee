import { FormGroup } from "react-bootstrap";
// import "./CommonForm.css";
import { useState } from "react";
const OrderForm = () => {
  const [countryCode, setCountryCode] = useState("+1"); // Default country code

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  return (
    <div className="CommonForm">
      <form onSubmit={(e) => e.preventDefault()}>
        <FormGroup className="formGroup">
          <label>Name*</label>
          <input type="text" placeholder="Your Name" />
        </FormGroup>
        <FormGroup className="formGroup">
          <label>Email*</label>
          <input type="email" placeholder="Your email" />
        </FormGroup>
        <FormGroup className="formGroup">
          <label>Phone*</label>
          <div className="formGroupPhone">
            <select value={countryCode} onChange={handleCountryCodeChange}>
              <option value="+1">+1</option>
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input type="number" placeholder="Your phone" />
          </div>
        </FormGroup>
        <FormGroup className="formGroup">
          <label>pharmacy name*</label>
          <input type="text" placeholder="pharmacy name" />
        </FormGroup>
        <FormGroup className="formGroup">
          <label>Your Order*</label>
          <textarea placeholder="Your Order" />
        </FormGroup>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
