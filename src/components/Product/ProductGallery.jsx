import { useState } from "react";
import { LeftArrow, RightArrow } from "../../components/icons";

const ProductGallery = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className="lg:col-span-2 flex flex-col md:flex-row">
      <div className="flex md:flex-col order-2 md:order-1 space-x-2 md:space-x-10 md:space-y-5 mr-0 md:mr-4">
        {product?.gallery.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-16 h-16 border ${
              currentImageIndex === index
                ? "border-primary"
                : "border-transparent"
            }`}
            data-testid={`gallery-thumbnail-${index}`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative md:order-2">
        <img
          src={product?.gallery[currentImageIndex]}
          alt={product?.name}
          className="w-full h-full object-cover"
          data-testid="product-gallery"
        />
        <button
          onClick={() =>
            setCurrentImageIndex(
              (prevIndex) =>
                (prevIndex - 1 + product?.gallery.length) %
                product?.gallery.length
            )
          }
          className="absolute px-3 py-2 bg-gray-dark top-1/2 left-2 transform -translate-y-1/2 z-10"
          aria-label="Previous image"
        >
          <LeftArrow />
        </button>

        <button
          onClick={() =>
            setCurrentImageIndex(
              (prevIndex) => (prevIndex + 1) % product?.gallery.length
            )
          }
          className="absolute px-3 py-2 bg-gray-dark top-1/2 right-2 transform -translate-y-1/2 z-10"
          aria-label="Next image"
        >
          <RightArrow />
        </button>

        {!product?.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
            <span className="text-3xl text-gray-text absolute">
              OUT OF STOCK
            </span>
            <img
              src={product?.gallery[currentImageIndex]}
              alt={product?.name}
              className="w-full h-full object-cover opacity-30"
              data-testid="product-gallery"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;
