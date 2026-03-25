import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
  return (
      <nav className="navbar">
          <p> Logo
          </p>

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