import React, { useState, createContext, useEffect } from "react";
import { itemData } from "./itemData";

export const ProductContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

function ProductProvider(props) {
  const [products, setProducts] = useState(itemData);
  const [input, setInput] = useState("");
  const [cart, setCart] = useState(cartFromLocalStorage);

  const onSearch = products.filter((result) => {
    return result.title.toLowerCase().includes(input.toLowerCase());
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getTotalCart = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <ProductContext.Provider
      value={[
        products,
        setProducts,
        input,
        setInput,
        onSearch,
        handleChange,
        cart,
        setCart,
        getTotalCart,
      ]}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
