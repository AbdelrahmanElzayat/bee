import Hero from "../../components/HomeComponents/Hero/Hero";
import About from "../../components/HomeComponents/about/About";
import Info from "../../components/HomeComponents/info/Info";
import MainLayout from "../../components/mainLayout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Info />
      <About />
    </MainLayout>
  );
};

export default Home;
