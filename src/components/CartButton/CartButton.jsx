import { useCart } from "../../context/CartContext";
import { Cart } from "../icons";

const CartButton = ({ itemCount }) => {
  const { isCartOpen, openCart, closeCart } = useCart();

  return (
    <button
      className="relative cursor-pointer"
      onClick={isCartOpen ? closeCart : openCart}
      data-testid="cart-btn"
    >
      <Cart />
      {itemCount > 0 && (
        <span className="absolute -top-3 -right-3 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
