import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyData from "../Home/dummyData";
import { Header } from "../../components/Header";
import { Loader } from "../../Loader";
import { LeftArrow, RightArrow } from "../../components/icons";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let foundProduct = null;
    Object.values(dummyData).forEach((category) => {
      const productMatch = category.find((p) => p.id === id);
      if (productMatch) foundProduct = productMatch;
    });

    if (foundProduct) {
      setProduct(foundProduct);
      const initialAttributes = {};
      foundProduct.attributes.forEach((attr) => {
        initialAttributes[attr.id] = attr.items[0].id;
      });
      setSelectedAttributes(initialAttributes);
    } else {
      navigate("/");
    }
    setLoading(false);
  }, [id, navigate]);

  const handleAttributeSelect = (attributeId, itemId) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeId]: itemId,
    }));
  };

  const handleAddToCart = () => {
    // Add to cart logic would go here
    console.log("Added to cart:", {
      product,
      selectedAttributes,
      quantity: 1,
    });
  };

  if (loading || !product) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }

  const price = product.prices[0];
  const allAttributesSelected = product.attributes.every(
    (attr) => selectedAttributes[attr.id]
  );

  return (
    <>
      <Header />

      <div className="mx-25 py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-28 lg:gap-10">
          {/* Gallery */}
          <section className="lg:col-span-2 flex flex-col md:flex-row">
            <div className="flex md:flex-col order-2 md:order-1 space-x-2 md:space-x-10 md:space-y-5 mr-0 md:mr-4">
              {product.gallery.map((image, index) => (
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
                src={product.gallery[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
                data-testid="product-gallery"
              />
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (prevIndex) =>
                      (prevIndex - 1 + product.gallery.length) %
                      product.gallery.length
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
                    (prevIndex) => (prevIndex + 1) % product.gallery.length
                  )
                }
                className="absolute px-3 py-2 bg-gray-dark top-1/2 right-2 transform -translate-y-1/2 z-10"
                aria-label="Next image"
              >
                <RightArrow />
              </button>

              {!product.inStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
                  <span className="text-3xl text-gray-text absolute">
                    OUT OF STOCK
                  </span>
                  <img
                    src={product.gallery[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-30"
                    data-testid="product-gallery"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Details */}
          <section className="lg:col-span-1 w-74">
            <h1 className="text-3xl font-semibold mb-8">{product.name}</h1>

            {product.attributes.map((attribute) => (
              <div key={attribute.id} className="mb-6">
                <h3
                  className="text-lg font-bold mb-2 font-roboto uppercase"
                  data-testid={`product-attribute-${attribute.name.toLowerCase()}`}
                >
                  {attribute.name}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {attribute.items.map((item) => {
                    const isSelected =
                      selectedAttributes[attribute.id] === item.id;
                    const isColor = attribute.type === "swatch";

                    return (
                      <button
                        key={item.id}
                        onClick={() =>
                          handleAttributeSelect(attribute.id, item.id)
                        }
                        className={`
                            ${isColor ? "w-8 h-8" : "px-6 py-3 border"} 
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
                        style={isColor ? { backgroundColor: item.value } : {}}
                        data-testid={`attribute-option-${attribute.name.toLowerCase()}-${item.value.toLowerCase()}`}
                        disabled={!product.inStock}
                      >
                        {!isColor && item.displayValue}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2 font-roboto uppercase">
                PRICE:
              </h3>
              <p className="text-xl font-bold">{`${
                price.currency
              }${price.amount.toFixed(2)}`}</p>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock || !allAttributesSelected}
              className={`
                w-full py-3 px-6 text-white font-bold
                ${
                  !product.inStock || !allAttributesSelected
                    ? "bg-gray cursor-not-allowed"
                    : "bg-green hover:bg-green-600"
                }
            `}
              data-testid="add-to-cart"
            >
              {!product.inStock ? "OUT OF STOCK" : "ADD TO CART"}
            </button>

            <div
              className="mt-8 prose font-roboto"
              data-testid="product-description"
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
