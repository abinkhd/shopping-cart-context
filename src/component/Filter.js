import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import shopContext from "../context/shopContext";

  
const Filter = () => {
  const {filter,filterDispatch}=useContext(shopContext);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check label="ascending" name="group1" type="radio"  onClick={()=>filterDispatch({type:'SORT_BY_PRICE',payload:'ASCENDING'})}/>
      </span>
      <span>
        <Form.Check label="descending" name="group2" type="radio" onClick={()=>filterDispatch({type:'SORT_BY_PRICE',payload:'DESCENDING'})} />
      </span>
      <span>
        <Form.Check
          label="Show Out of Stock"
          name="group1"
          type="checkbox"
          onClick={()=>filterDispatch({type:'TOGGLE_INCLUDE_OUT_OF_STOCK'})}
        />
      </span>
      <span>
        <Form.Check
          label="Fast Deliver Only"
          name="group1"
          type="checkbox"
          onClick={()=>filterDispatch({type:'TOGGLE_FAST_DELIVERY'})}
        />
      </span>
      <span>
        <Rating rating={3} />
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filter;
