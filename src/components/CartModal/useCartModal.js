import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";

const useCartModal = () => {
  const { isCartOpen, closeCart, cartItems, updateCart } = useCart();
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const priceTotal = cartItems.reduce(
      (sum, item) => sum + item.product.prices[0].amount * item.quantity,
      0
    );
    setTotalItems(itemsCount);
    setTotalPrice(priceTotal);
  }, [cartItems]);

  const handlePlaceOrder = () => {
    // Place order logic goes here
    console.log("Order placed:", cartItems);
    updateCart([]);
    closeCart();
  };

  return {
    isCartOpen,
    totalItems,
    totalPrice,
    handlePlaceOrder,
    closeCart,
    cartItems,
    updateCart,
  };
};

export default useCartModal;
