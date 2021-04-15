import React, { useState, createContext } from "react";
import { itemData } from "./itemData";

export const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState(itemData);
  const [input, setInput] = useState("");

  const onSearch = products.filter((result) => {
    return result.title.toLowerCase().includes(input.toLowerCase());
  });

  const handleChange = (e) => {
    setInput(e.target.value);
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
        
      ]}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
