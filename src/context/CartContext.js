import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, selectedAttributes) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.product.id === product.id &&
          JSON.stringify(item.selectedAttributes) ===
            JSON.stringify(selectedAttributes)
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: `${product.id}-${Date.now()}`,
            product,
            selectedAttributes,
            quantity: 1,
          },
        ];
      }
    });
  };

  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCart,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
