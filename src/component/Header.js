import React, { useContext } from "react";
import { Badge, Button, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import shopContext from "../context/shopContext";
import { MdDelete } from "react-icons/md";
import { BrowserRouter, useNavigate } from "react-router-dom";

const Header = () => {
  const { shop, dispatch } = useContext(shopContext);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Flix Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Dropdown alignRight>
                <Dropdown.Toggle variant="success">
                  <FaShoppingCart />
                  <Badge>{shop.cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {shop.cart.map((p) => {
                    return (
                      <>
                        <span className="cartitem" key={p.id}>
                          <img src={p.image} className="cartItemImg" />
                          <div className="cartItemDetail">
                            <span>{p.productName}</span>
                            <span>{p.price}</span>
                          </div>
                          <MdDelete
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: p.id,
                              })
                            }
                          />
                        </span>
                      </>
                    );
                  })}

                  <Button variant="warning" onClick={() => navigate("/cart")}>
                    Go To Cart
                  </Button>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
