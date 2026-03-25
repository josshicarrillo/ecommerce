import "./titulo.css"
import logo from "../assets/img/logo2.jpg"

const Titulo = () => {
    const title  = "Bienvenidos a Helen Collection"
    return (
        <div className="titulo">
            <h1>Bienvenidos a Helen Collection</h1>
            
            <h2> {title} </h2>
        </div>
    )
} 

export default Titulo