import { CartItem } from "../CartItem";
import useCartModal from "./useCartModal";

const Cart = () => {
  const {
    isCartOpen,
    totalItems,
    totalPrice,
    handlePlaceOrder,
    closeCart,
    cartItems,
    updateCart,
  } = useCartModal();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-overlay z-40"
        style={{ top: "5rem" }}
        onClick={closeCart}
      />

      {/* Cart modal */}
      <div className="fixed top-20 right-18 h-fit w-full max-w-[21rem] sm:w-96 bg-white z-50 shadow-lg overflow-y-auto">
        <div className="p-4">
          <h2 className="font-bold font-raleway">
            My Bag,{" "}
            <span className="font-medium">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </h2>

          <div className="divide-y divide-gray-200">
            {cartItems.length === 0 ? (
              <p className="text-lg py-6 text-center">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  cartItems={cartItems}
                  updateCart={updateCart}
                />
              ))
            )}
          </div>

          <div className="pt-4">
            <div className="flex justify-between mb-6 font-bold">
              <span>Total:</span>
              <span data-testid="cart-total">${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={cartItems.length === 0}
              className={`flex-1 py-3 text-center text-sm font-semibold text-white w-full uppercase ${
                cartItems.length === 0 ? "bg-gray" : "bg-green"
              }`}
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
