import { useEffect, useState } from "react";
import "./store.css";
import { 
  getProducts, 
  getProductsByCategory, 
  getProductsOnSale,
  getProductsByCategoryAndSubcategory,
  getSubcategoriesByCategory 
} from "./data/data";
import StoreNavbar from "./componets/StoreNavbar/StoreNavbar";
import ProductCatalog from "./componets/ProductCatalog/ProductCatalog";
import ProductDetail from "./componets/ProductDetail/ProductDetail";
import CartView from "./componets/CartView/CartView";
import CheckoutForm from "./componets/CheckoutForm/CheckoutForm";
import PurchaseSummary from "./componets/PurchaseSummary/PurchaseSummary";

function StoreApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState("catalog");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [purchaseSummary, setPurchaseSummary] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [availableSubcategories, setAvailableSubcategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    
    if (selectedCategory === "ofertas") {
      getProductsOnSale()
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error al cargar productos:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (selectedCategory && selectedSubcategory) {
      getProductsByCategoryAndSubcategory(selectedCategory, selectedSubcategory)
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error al cargar productos:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (selectedCategory) {
      getProductsByCategory(selectedCategory)
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error al cargar productos:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getProducts()
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error al cargar productos:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedCategory, selectedSubcategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedSubcategory(null);
    setCurrentView("catalog");
  };

  const goToCatalog = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setCurrentView("catalog");
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentView("detail");
  };

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Math.min(item.quantity + quantity, product.stock),
              }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });
  };

  const updateCartQuantity = (productId, change) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id !== productId) {
            return item;
          }

          const nextQuantity = item.quantity + change;

          if (nextQuantity < 1) {
            return null;
          }

          return {
            ...item,
            quantity: Math.min(nextQuantity, item.stock),
          };
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const confirmPayment = (customerData) => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    setPurchaseSummary({
      orderNumber: `ORD-${Date.now().toString().slice(-6)}`,
      date: new Date().toLocaleDateString("es-PE"),
      customer: {
        fullName: customerData.fullName,
        email: customerData.email,
        phone: customerData.phone,
        address: customerData.address,
      },
      payment: {
        cardName: customerData.cardName,
        cardNumber: `**** **** **** S/ {customerData.cardNumber.slice(-4)}`,
      },
      items: cartItems,
      total,
    });

    setCartItems([]);
    setCurrentView("summary");
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="store-app">
      <StoreNavbar
        cartCount={cartCount}
        onGoHome={goToCatalog}
        onOpenCart={() => setCurrentView("cart")}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />

      <main className="store-main">
        {currentView === "catalog" && (
          <ProductCatalog
            loading={loading}
            products={products}
            onSelectProduct={openProductDetail}
            selectedCategory={selectedCategory}
            onClearFilter={() => handleCategoryClick(selectedCategory)}
          />
        )}

        {currentView === "detail" && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onBack={goToCatalog}
            onAddToCart={addToCart}
            onGoToCart={() => setCurrentView("cart")}
          />
        )}

        {currentView === "cart" && (
          <CartView
            cartItems={cartItems}
            total={cartTotal}
            onBack={goToCatalog}
            onPay={() => setCurrentView("checkout")}
            onIncrease={(productId) => updateCartQuantity(productId, 1)}
            onDecrease={(productId) => updateCartQuantity(productId, -1)}
            onRemove={removeFromCart}
          />
        )}

        {currentView === "checkout" && (
          <CheckoutForm
            cartItems={cartItems}
            total={cartTotal}
            onBack={() => setCurrentView("cart")}
            onConfirm={confirmPayment}
          />
        )}

        {currentView === "summary" && purchaseSummary && (
          <PurchaseSummary summary={purchaseSummary} onBackHome={goToCatalog} />
        )}
      </main>
    </div>
  );
}

export default StoreApp;
