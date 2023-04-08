import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <CartContext.Provider value={[showInput, setShowInput]}>
      {children}
    </CartContext.Provider>
  );
};
