import { useState, useEffect } from "react";

const Cart = ({ isOpen, onClose, cartItems, updateCart }) => {
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
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-overlay z-40"
        style={{ top: "5rem" }}
        onClick={onClose}
      />

      {/* Cart modal */}
      <div className="fixed top-20 right-18 h-fit w-full sm:w-96 bg-white z-50 shadow-lg overflow-y-auto">
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
                <div key={item.id} className="py-4">
                  <h1>{item.name}</h1>
                  {/* More info goes here */}
                </div>
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
