import { useEffect } from "react";
import Hero from "../../components/HomeComponents/Hero/Hero";
import About from "../../components/HomeComponents/about/About";
import Info from "../../components/HomeComponents/info/Info";
import Mission from "../../components/HomeComponents/mission/Mission";
import Vision from "../../components/HomeComponents/vision/Vision";
import MainLayout from "../../components/mainLayout/MainLayout";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <Hero />
      <Info />
      <About />
      <Vision />
      <Mission />
    </MainLayout>
  );
};

export default Home;
