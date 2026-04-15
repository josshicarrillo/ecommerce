import { useState } from "react";
import "./productdetail.css";

const ProductDetail = ({ product, onBack, onAddToCart, onGoToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, product.stock));
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <section className="panel detail-panel">
      <button className="ghost-button" onClick={onBack}>
        Volver al catalogo
      </button>

      <div className="detail-layout">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-content">
          <span className="section-badge">Detalle del producto</span>
          <h2>{product.name}</h2>
          <p className="detail-description">{product.description}</p>
          <p className="detail-meta">Stock disponible: {product.stock}</p>
          <p className="detail-price">S/ {product.price}</p>

          <div className="detail-quantity">
            <span>Cantidad</span>
            <div className="quantity-controls">
              <button type="button" onClick={handleDecrease}>
                -
              </button>
              <strong>{quantity}</strong>
              <button type="button" onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>

          <div className="detail-actions">
            <button className="primary-button" onClick={() => onAddToCart(product, quantity)}>
              Agregar al carrito
            </button>
            <button className="secondary-button" onClick={onGoToCart}>
              Ver carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
