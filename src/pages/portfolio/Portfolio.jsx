import { useEffect } from "react";
import MainLayout from "../../components/mainLayout/MainLayout";
import Common from "../../components/portfolioComponent/CommonPortfolio/Common";
import ProductList from "../../components/portfolioComponent/products/ProductList";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <Common />
      <ProductList />
    </MainLayout>
  );
};

export default Portfolio;
