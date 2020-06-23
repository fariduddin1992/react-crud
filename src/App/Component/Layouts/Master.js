import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Master = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default Master;
