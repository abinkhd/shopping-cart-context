import React, { useContext } from "react";
import shopContext from "../context/shopContext";
import { Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import "./styles.css";

const Cart = () => {
  const { shop, dispatch } = useContext(shopContext);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {shop.cart.map((p) => {
            return (
              <ListGroup.Item key={p.id}>
                <Row>
                  <Col md={2}>
                    <Image src={p.image} width="100px" height="100px" />
                  </Col>
                  <Col md={2}>{p.productName}</Col>
                  <Col md={2}>{p.price}</Col>
                  <Col md={2}>
                    <Form.Control as="select" value={p.qty}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </Form.Control>
                  </Col>
                  <Col md={2}>{p.price}</Col>
                  <Col md={2}>{p.price}</Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default Cart;
