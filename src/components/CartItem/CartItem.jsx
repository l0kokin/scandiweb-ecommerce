import useCartItem from "./useCartItem";

const CartItem = ({ item }) => {
  const { handleDecrease, handleIncrease } = useCartItem();

  return (
    <div key={item.id} className="py-4">
      <div className="flex justify-between">
        <div className="w-2/3 pr-4">
          <h3 className="font-semibold">{item.product.name}</h3>
          <p className="text-lg font-bold my-2">
            {item.product.prices[0].currency}
            {(item.product.prices[0].amount * item.quantity).toFixed(2)}
          </p>

          {item.product.attributes.map((attr) => (
            <div key={attr.id} className="mb-2">
              <p className="text-sm font-medium">{attr.name}:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {attr.items.map((option) => (
                  <div
                    key={option.id}
                    className={`text-xs px-2 py-1 border border-black ${
                      item.selectedAttributes[attr.id] === option.id
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    style={
                      attr.type === "swatch"
                        ? { backgroundColor: option.value }
                        : {}
                    }
                    data-testid={`cart-item-attribute-${attr.name.toLowerCase()}-${option.value.toLowerCase()}${
                      item.selectedAttributes[attr.id] === option.id
                        ? "-selected"
                        : ""
                    }`}
                  >
                    {attr.type !== "swatch" && option.displayValue}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/3 flex flex-col items-center">
          <button
            onClick={() => handleIncrease(item.id)}
            className="text-2xl font-extralight w-6 h-6 border border-black flex items-center justify-center"
            data-testid="cart-item-amount-increase"
          >
            +
          </button>
          <span className="my-2" data-testid="cart-item-amount">
            {item.quantity}
          </span>
          <button
            onClick={() => handleDecrease(item.id)}
            className="text-2xl font-extralight w-6 h-6 border border-black flex items-center justify-center"
            data-testid="cart-item-amount-decrease"
          >
            -
          </button>
        </div>

        <img
          src={item.product.gallery[0]}
          alt={item.product.name}
          className="w-[42%] object-cover"
        />
      </div>
    </div>
  );
};

export default CartItem;
