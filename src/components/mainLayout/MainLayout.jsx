/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../layouts/header/Header.jsx";
import Footer from "../layouts/footer/Footer.jsx";
const MainLayout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
