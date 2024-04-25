import productImg from "../../../assets/images/product.png";
const Product = () => {
  return (
    <div className="Product">
      <div className="productTitle">
        <div className="productImg">
          <img src={productImg} alt="productImg" />
        </div>
        <h2>Reboton Gel:</h2>
      </div>
      <div className="productDescription">
        <span>Description</span>
        <p>Much more than a moisturizing wound healing gel.</p>
      </div>
    </div>
  );
};

export default Product;
