import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyData from "../Home/dummyData";
import { Header } from "../../components/Header";
import { Loader } from "../../Loader";
import { ProductGallery } from "../../components/Product";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedAttributes, setSelectedAttributes] = useState({});
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
          <ProductGallery product={product} />

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
