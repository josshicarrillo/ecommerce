import "./purchasesummary.css";

const PurchaseSummary = ({ summary, onBackHome }) => {
  return (
    <section className="panel summary-panel">
      <span className="section-badge">Compra confirmada</span>
      <h2>Resumen de tu compra</h2>
      <p className="summary-intro">
        La orden fue procesada correctamente y este es el detalle final.
      </p>

      <div className="summary-grid">
        <article className="summary-card">
          <h3>Pedido</h3>
          <p>Codigo: {summary.orderNumber}</p>
          <p>Fecha: {summary.date}</p>
          <p>Total pagado: S/ {summary.total}</p>
        </article>

        <article className="summary-card">
          <h3>Cliente</h3>
          <p>{summary.customer.fullName}</p>
          <p>{summary.customer.email}</p>
          <p>{summary.customer.phone}</p>
          <p>{summary.customer.address}</p>
        </article>

        <article className="summary-card">
          <h3>Pago</h3>
          <p>Titular: {summary.payment.cardName}</p>
          <p>Tarjeta: {summary.payment.cardNumber}</p>
        </article>
      </div>

      <div className="summary-products">
        <h3>Productos comprados</h3>
        {summary.items.map((item) => (
          <div className="summary-product-row" key={item.id}>
            <span>
              {item.name} x {item.quantity}
            </span>
            <strong>S/ {item.price * item.quantity}</strong>
          </div>
        ))}
      </div>

      <button className="primary-button" onClick={onBackHome}>
        Volver a la tienda
      </button>
    </section>
  );
};

export default PurchaseSummary;
