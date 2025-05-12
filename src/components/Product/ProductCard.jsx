import { Link } from "react-router-dom";
import { useState } from "react";
import { Cart } from "../icons";

const ProductCard = ({ product, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const price = product.prices[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    // Add to cart logic
    console.log("Added to cart:", product);
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
        <div className="bg-gray-100 aspect-square flex items-center justify-center relative">
          <img
            src={product.gallery[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
              <img
                src={product.gallery[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="text-xl font-bold text-gray-800 absolute">
                OUT OF STOCK
              </span>
            </div>
          )}
        </div>
        <div className="mt-6 text-lg text-black">
          <h3 className="font-light">{`${product.brand} ${product.name}`}</h3>
          <p className="font-medium">{`${price.currency}${price.amount.toFixed(
            2
          )}`}</p>
        </div>
      </Link>

      {product.inStock && isHovered && (
        <button
          className="absolute bottom-24 right-6 bg-green text-white rounded-full opacity-100 transition-opacity p-3"
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
