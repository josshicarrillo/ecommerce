import {useState, useEffect, use} from "react"

const Counter = () => {
   
   const [contador, setContador] = useState(0)
   const [toggle, setToggle] = useState(true)

   //Se ejecuta solo al montar el componente
   //ejem: llamadas a apis, suscripciones a EventListener
   useEffect(() => {
      const fetchApi = () => {
         fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => console.log(data))
      }
      fetchApi()
    },[])

   //se ejecuta en montaje y cada vez que el contador cambie
   //ejem: se utilza para realizar acciones especificas cuando una variable de dependencia contador cambie
   useEffect(() => {
      console.log("El contador ha cambiado:")
   }, [contador])

   // se ejecuta en el montaje y cada vez que cualquier estado del componente cambie
   // ejem: operaciones globales de monitoreo o registro, actualizaciones generales de componente
   useEffect(() => {
      console.log("usseEffect sin array de dependencias")
   })

    const aumentar = () => {
       setContador(contador + 1)
       
   }
   
   const alternarToggle = () => {
      setToggle(!toggle)
   }

  return (
      <div>
          <p>Contador: {contador}</p>
        <button onClick={aumentar}>+</button>
        <p>valor toggle: {toggle.toString()}</p>
         <button onClick={alternarToggle}>Alternar Valor</button>
    </div>
  )
}

export default Counter