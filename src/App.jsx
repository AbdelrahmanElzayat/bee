import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Career from "./pages/career/Career.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/career"} element={<Career />} />
      </Routes>
    </>
  );
}

export default App;
