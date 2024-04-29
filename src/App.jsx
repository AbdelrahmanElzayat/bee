import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Career from "./pages/career/Career.jsx";
import Order from "./pages/order/Order.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/career"} element={<Career />} />
        <Route path={"/order"} element={<Order />} />
        <Route path={"/contact-us"} element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
