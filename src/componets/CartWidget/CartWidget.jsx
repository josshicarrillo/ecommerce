import { PiShoppingCartSimpleBold } from "react-icons/pi";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <p><PiShoppingCartSimpleBold size={24} /></p>
      <p>0</p>
    </div>
  )
}

export default CartWidget