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
              <h3 className="text-sm font-bold mb-2 font-roboto uppercase">
                {attr.name}:
              </h3>
              <div className="flex flex-wrap gap-2 w-full">
                {attr.items.map((option) => {
                  const isSelected =
                    item.selectedAttributes[attr.id] === option.id;
                  const isColor = attr.type === "swatch";

                  return (
                    <div
                      key={option.id}
                      className={`
                        ${isColor ? "w-5 h-5" : "px-2 py-0.5 border"} 
                        ${
                          isSelected
                            ? isColor
                              ? "border border-white ring ring-green"
                              : "bg-primary text-white"
                            : isColor
                            ? "border border-transparent"
                            : "border-primary"
                        }
                        flex items-center justify-center
                      `}
                      style={isColor ? { backgroundColor: option.value } : {}}
                      data-testid={`cart-item-attribute-${attr.name.toLowerCase()}-${option.value.toLowerCase()}${
                        isSelected ? "-selected" : ""
                      }`}
                    >
                      {!isColor && option.displayValue}
                    </div>
                  );
                })}
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
