import "./cartview.css";

const CartView = ({ cartItems, total, onBack, onPay, onIncrease, onDecrease, onRemove }) => {
  return (
    <section className="panel">
      <div className="section-header">
        <div>
          <span className="section-badge">Carrito de compras</span>
          <h2>Productos seleccionados</h2>
        </div>
        <button className="ghost-button" onClick={onBack}>
          Seguir comprando
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-state">
          <h3>Tu carrito esta vacio</h3>
          <p>Agrega productos para poder pasar a pagar.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>S/ {item.price} c/u</span>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button type="button" onClick={() => onDecrease(item.id)}>
                      -
                    </button>
                    <strong>{item.quantity}</strong>
                    <button type="button" onClick={() => onIncrease(item.id)}>
                      +
                    </button>
                  </div>

                  <button className="link-button" onClick={() => onRemove(item.id)}>
                    Quitar
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h3>Resumen</h3>
            <p>Total de productos: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
            <p className="cart-total">Total a pagar: S/ {total}</p>
            <button className="primary-button" onClick={onPay}>
              Pagar
            </button>
          </aside>
        </div>
      )}
    </section>
  );
};

export default CartView;
