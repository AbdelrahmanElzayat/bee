import { useEffect } from "react";
import CommonCareer from "../../components/careerComponents/CommonCareer";
import CareerContent from "../../components/careerComponents/careerContent/CareerContent";
import MainLayout from "../../components/mainLayout/MainLayout";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <CommonCareer />
      <CareerContent />
    </MainLayout>
  );
};

export default Portfolio;
