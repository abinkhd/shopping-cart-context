import React, { useContext } from "react";
import shopContext from "../context/shopContext";
import "./styles.css";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const AllProducts = () => {
  const { shop, filter } = useContext(shopContext);
  console.log(filter);
  const transformedData = () => {
    let sortedProducts = shop.products;
    if (filter.sortBy !== "") {
     sortedProducts= sortedProducts.sort((a, b) => {
        if ((filter.sortBy === 'ASCENDING')) 
          return a.price - b.price;
        else 
          return b.price - a.price;
      })}
      if(filter.includeOutOfStock){
        return sortedProducts=sortedProducts.filter(p=>p.inStock===0)
      }
      if(filter.fastDelivery){
        return sortedProducts=sortedProducts.filter(p=>p.fastDelivery===true)
      }
    return sortedProducts;
  };
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformedData().map((p) => {
          return <SingleProduct product={p} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
