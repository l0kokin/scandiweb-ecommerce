import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { CartButton } from "../CartButton";
import { Cart } from "../Cart";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { openCart, cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-white pt-6 mb-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <nav className="flex">
            <NavLink
              to="/women"
              className={({ isActive }) =>
                `uppercase pt-1 pb-8 px-4 leading-[1.2] ${
                  isActive
                    ? "border-b-2 border-green text-green font-semibold"
                    : "text-primary font-normal"
                }`
              }
              data-testid="category-link"
              activeclassname="active"
            >
              Women
            </NavLink>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                `uppercase pt-1 pb-8 px-4 leading-[1.2] ${
                  isActive
                    ? "border-b-2 border-green text-green font-semibold"
                    : "text-primary font-normal"
                }`
              }
              data-testid="category-link"
              activeclassname="active"
            >
              Men
            </NavLink>
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                `uppercase pt-1 pb-8 px-4 leading-[1.2] ${
                  isActive
                    ? "border-b-2 border-green text-green font-semibold"
                    : "text-primary font-normal"
                }`
              }
              data-testid="category-link"
              activeclassname="active"
            >
              Kids
            </NavLink>
          </nav>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <CartButton handleOpenCart={openCart} itemCount={totalItems} />
        </div>
      </header>
      <Cart />
    </>
  );
};

export default Header;
