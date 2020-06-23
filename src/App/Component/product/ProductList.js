import React, { useState, useEffect } from "react";
import { Table, Card, Form, Button } from "react-bootstrap";
import { productData } from "./../fakedata/data";
import FormCheckInput from "react-bootstrap/FormCheckInput";

const ProductList = (props) => {
  const [state, setState] = useState({
    product: [],
    productValue: {},
    editStatus: false,
  });

  useEffect(() => {
    const cloneObj = { ...state };
    const productList = productData();
    cloneObj.product = productList;
    setState(cloneObj);
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    const cloneObj = { ...state };
    cloneObj.productValue[input.name] = input.value;
    setState(cloneObj);
  };

  const submitForm = (e) => {
    e.preventDefault();
    let cloneObj = { ...state };
    let product = cloneObj.product;
    let obj = {
      name: cloneObj.productValue.name,
      Quantity: cloneObj.productValue.quantity,
      price: cloneObj.productValue.price,
    };
    product.push(obj);
    setState(cloneObj);
    cloneObj.productValue = {};
    e.target.reset();
  };

  const productEdit = (id) => {
    let cloneObj = { ...state };
    cloneObj.editStatus = true;
    let product = cloneObj.product;
    let updateProduct = product.filter((element) => element.id == id);
    cloneObj.productValue = updateProduct[0];
    setState(cloneObj);
    console.log(cloneObj);
  };

  const handleEdit = ({ currentTarget: input }) => {
    const cloneObj = { ...state };
    cloneObj.productValue[input.name] = input.value;
    setState(cloneObj);
  };

  const updateForm = (e) => {
    e.preventDefault();
    console.log("state,", state);
  };

  const productDelete = (id) => {
    const cloneObj = { ...state };
    let product = cloneObj.product;
    let result = product.filter((element) => element.id !== id);
    cloneObj.product = result;
    setState(cloneObj);
  };

  const checkdvalueget = (e, index) => {
    let isChecked = e.target.checked;
    let cloneObj = { ...state };
    let productList = cloneObj.product;
    productList[index].ischecked = isChecked;
    setState(cloneObj);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <Card className="formCard">
            <Form onSubmit={!state.editStatus ? submitForm : updateForm}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Name"
                  name="name"
                  handleChange
                  value={state.productValue.name}
                  onChange={!state.editStatus ? handleChange : handleEdit}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control
                  type="text"
                  name="quantity"
                  value={state.productValue.quantity}
                  onChange={!state.editStatus ? handleChange : handleEdit}
                  placeholder="Enter Product Quantity"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  placeholder="Enter Product Price"
                  onChange={!state.editStatus ? handleChange : handleEdit}
                  value={state.productValue.price}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {!state.editStatus ? "Save" : "update"}
              </Button>
            </Form>
          </Card>
        </div>

        <div className="col-md-6">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>product Quantity</th>
                <th>price</th>
                {/* <th>pay price</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.product &&
                state.product.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    {/* <td>
                      <FormCheckInput
                        type="checkbox"
                        checked={item.ischecked}
                        onChange={(e) => checkdvalueget(e, index)}
                      />
                    </td> */}
                    <td>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => productEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => productDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
