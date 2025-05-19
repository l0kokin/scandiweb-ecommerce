import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category?" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
