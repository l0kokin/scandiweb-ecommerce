import { Link } from "react-router-dom";
import { useState } from "react";
import { Cart } from "../icons";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product, ...props }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const price = product.prices[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    const defaultAttributes = {};
    product.attributes.forEach((attr) => {
      defaultAttributes[attr.id] = attr.items[0].id;
    });
    addToCart(product, defaultAttributes);
  };

  return (
    <div
      className={`relative group p-4 mt-26 ${
        !product.inStock ? "opacity-50" : ""
      } transition-shadow duration-300 ${
        isHovered ? "shadow-(--product-shadow)" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square flex items-center justify-center relative">
          <img
            src={product.gallery[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray bg-opacity-70">
              <img
                src={product.gallery[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="text-3xl text-black leading-[1.6] absolute uppercase">
                OUT OF STOCK
              </span>
            </div>
          )}
        </div>
        <div className="mt-6 text-lg text-black">
          <h3 className="font-light">{product.name}</h3>
          <p className="font-medium">{`${price.currency}${price.amount.toFixed(
            2
          )}`}</p>
        </div>
      </Link>

      {product.inStock && isHovered && (
        <button
          className="absolute bottom-18 right-6 bg-green text-white rounded-full opacity-100 transition-opacity p-[14px]"
          onClick={handleAddToCart}
          data-testid="quick-shop-btn"
        >
          <Cart color="white" />
        </button>
      )}
    </div>
  );
};

export default ProductCard;
