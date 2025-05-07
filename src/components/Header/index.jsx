import { NavLink } from "react-router-dom";
import Cart from "../icons/Cart";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="bg-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <nav className="flex">
          <NavLink
            to="/women"
            className={({ isActive }) =>
              `uppercase pt-1 pb-8 px-4 ${
                isActive ? "border-b-2 border-green text-green" : "text-primary"
              }`
            }
            data-testid="category-link"
            activeclassName="active"
          >
            Women
          </NavLink>
          <NavLink
            to="/men"
            className={({ isActive }) =>
              `uppercase pt-1 pb-8 px-4 ${
                isActive ? "border-b-2 border-green text-green" : "text-primary"
              }`
            }
            data-testid="category-link"
            activeclassName="active"
          >
            Men
          </NavLink>
          <NavLink
            to="/kids"
            className={({ isActive }) =>
              `uppercase pt-1 pb-8 px-4 ${
                isActive ? "border-b-2 border-green text-green" : "text-primary"
              }`
            }
            data-testid="category-link"
            activeclassName="active"
          >
            Kids
          </NavLink>
        </nav>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <button>
          <Cart />
        </button>
      </div>
    </header>
  );
};

export default Header;
