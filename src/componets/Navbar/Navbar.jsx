import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/img/logo2.jpg"


const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Logo" />
          </div>

          <ul>
              <li>Mujer</li>
              <li>Hombre</li>
              <li>Niños</li>
              <li>Ofertas</li>
          </ul>
         <CartWidget />
    </nav>
  )
}

export default Navbar