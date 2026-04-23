import { PiShoppingCartSimpleBold } from "react-icons/pi";
import logo from "../../assets/img/logo.PNG";
import "./storenavbar.css";

const StoreNavbar = ({ cartCount, onGoHome, onOpenCart, selectedCategory, onCategoryClick }) => {
  const categories = ["mujer", "hombre", "niños"];

  return (
    <header className="store-navbar">
      <button className="brand-button" onClick={onGoHome}>
        <img src={logo} alt="Logo de la tienda" />
        <div>
          <strong>HELEN COLECTION</strong>
          <span>Tienda online</span>
        </div>
      </button>

      <nav className="store-nav-links">
        {categories.map((category) => (
          <button
            key={category}
            className={`nav-category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => onCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
        <button
          className={`nav-category-btn ${selectedCategory === "ofertas" ? "active" : ""}`}
          onClick={() => onCategoryClick("ofertas")}
        >
          Ofertas
        </button>
      </nav>

      <button className="cart-button" onClick={onOpenCart}>
        <PiShoppingCartSimpleBold size={22} />
        <span>Carrito</span>
        <strong>{cartCount}</strong>
      </button>
    </header>
  );
};

export default StoreNavbar;
