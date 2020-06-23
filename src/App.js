import React from "react";
import logo from "./logo.svg";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./App.css";
import ProductContainer from "./App/Container/ProductContainer";

function App() {
  return (
    <div>
      <ProductContainer />
    </div>
  );
}

export default App;
