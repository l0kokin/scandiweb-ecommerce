import { useCart } from "../../context/CartContext";

const useCartItem = () => {
  const { updateCart, cartItems } = useCart();

  const handleIncrease = (itemId) => {
    updateCart(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (itemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem.quantity === 1) {
      updateCart(cartItems.filter((item) => item.id !== itemId));
    } else {
      updateCart(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  return {
    handleDecrease,
    handleIncrease,
  };
};

export default useCartItem;
