import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader";
import dummyProducts from "./dummyData";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/Product";

const Home = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoryKey = category || "all";
    setProducts(dummyProducts[categoryKey] || []);
    setLoading(false);
  }, [category]);

  if (loading) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-5xl capitalize">
          {category ? `${category}` : "All Products"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              data-testid={`product-${product.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
