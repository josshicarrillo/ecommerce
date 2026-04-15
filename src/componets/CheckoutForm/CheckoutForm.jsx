import { useState } from "react";
import "./checkoutform.css";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

const CheckoutForm = ({ cartItems, total, onBack, onConfirm }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirm(formData);
  };

  return (
    <section className="panel">
      <div className="section-header">
        <div>
          <span className="section-badge">Pagar</span>
          <h2>Datos personales y tarjeta</h2>
        </div>
        <button className="ghost-button" onClick={onBack}>
          Volver al carrito
        </button>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Nombre completo
              <input name="fullName" value={formData.fullName} onChange={handleChange} required />
            </label>

            <label>
              Correo electronico
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Telefono
              <input name="phone" value={formData.phone} onChange={handleChange} required />
            </label>

            <label>
              Direccion
              <input name="address" value={formData.address} onChange={handleChange} required />
            </label>

            <label>
              Nombre en tarjeta
              <input name="cardName" value={formData.cardName} onChange={handleChange} required />
            </label>

            <label>
              Numero de tarjeta
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                inputMode="numeric"
                minLength={16}
                maxLength={16}
                required
              />
            </label>

            <label>
              Vencimiento
              <input
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/AA"
                required
              />
            </label>

            <label>
              CVV
              <input
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                inputMode="numeric"
                minLength={3}
                maxLength={4}
                required
              />
            </label>
          </div>

          <button className="primary-button" type="submit" disabled={cartItems.length === 0}>
            Confirmar pago
          </button>
        </form>

        <aside className="cart-summary">
          <h3>Resumen del pago</h3>
          {cartItems.map((item) => (
            <p key={item.id}>
              {item.name} x {item.quantity}
            </p>
          ))}
          <p className="cart-total">Total: S/ {total}</p>
        </aside>
      </div>
    </section>
  );
};

export default CheckoutForm;
