import React from "react";
import ProductCard from "./ProductCard";
const Product = () => {
  let state = [
    {
      name: "Apple",
      price: 120000,
    },
    {
      name: "Samsung",
      price: 20000,
    },
    {
      name: "RealMe",
      price: 21212,
    },
    {
      name: "Vivo",
      price: 12121,
    },
    {
      name: "IQOo",
      price: 32213,
    },
  ];

  return (
    <div>
      {state.map((val,i) => (
        <ProductCard key={i} name={val.name} price={val.price} />
      ))}
    </div>
  );
};

export default Product;
