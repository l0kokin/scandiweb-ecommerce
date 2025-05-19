import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyData from "../Home/dummyData";
import { useCart } from "../../context/CartContext";

const useProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
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
    addToCart(product, selectedAttributes);
  };

  const price = product?.prices[0];
  const allAttributesSelected = product?.attributes.every(
    (attr) => selectedAttributes[attr.id]
  );

  return {
    id,
    loading,
    product,
    handleAddToCart,
    handleAttributeSelect,
    selectedAttributes,
    price,
    allAttributesSelected,
  };
};

export default useProductDetails;
