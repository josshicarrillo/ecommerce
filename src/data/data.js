const products = [
    {
        id: 1,
        name: "Vestido 1",
        description: "Vestido elegante para ocasiones especiales",
        stock: 15,
        price: 10,
        image:"/img/MODELO-1.jpg"
    },
    {
        id: 2,
        name: "Polo",
        description: "polo deportivo para actividades al aire libre",
        stock: 10,
        price: 20,
        image: "/img/MODELO-2.jpg"
    },

    {
        id: 3,
        name: "pantalon",
        description: "pantalon deportivo para actividades al aire libre",
        stock: 20,
        price: 30,
        image: "/img/MODELO-3.jpg"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000)

    })
}  

export { getProducts }