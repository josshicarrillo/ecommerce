const products = [
    // CATEGORÍA: MUJER
    {
        id: 1,
        name: "Vestido Elegante",
        description: "Vestido elegante para ocasiones especiales",
        stock: 15,
        price: 89,
        image: "/image/vestido.webp",
        category: "mujer",
        subcategory: "vestidos",
        liquidationDiscount: 30
    },
    {
        id: 2,
        name: "Blusa Casual",
        description: "Blusa casual cómoda para el día a día",
        stock: 20,
        price: 34,
        image: "/image/blusa.webp",
        category: "mujer",
        subcategory: "blusas",
        liquidationDiscount: 15
    },
    {
        id: 3,
        name: "Pantalón Deportivo Mujer",
        description: "Pantalón deportivo para actividades al aire libre",
        stock: 18,
        price: 59.99,
        image: "/image/pantalon.webp",
        category: "mujer",
        subcategory: "pantalones",
        liquidationDiscount: 25
    },
    {
        id: 4,
        name: "Sudadera Mujer",
        description: "Sudadera cómoda y abrigada",
        stock: 12,
        price: 44.99,
        image: "/image/sudadera.webp",
        category: "mujer",
        subcategory: "sudaderas",
        liquidationDiscount: 40
    },

    // CATEGORÍA: HOMBRE
    {
        id: 5,
        name: "Polo Deportivo",
        description: "Polo deportivo para actividades al aire libre",
        stock: 25,
        price: 39.99,
        image: "/image/polodeportivo.webp",
        category: "hombre",
        subcategory: "camisetas"
    },
    {
        id: 6,
        name: "Pantalón Casual Hombre",
        description: "Pantalón casual cómodo para el día a día",
        stock: 16,
        price: 59.99,
        image: "/image/pantalonh.webp",
        category: "hombre",
        subcategory: "pantalones"
    },
    {
        id: 7,
        name: "Camisa Formal",
        description: "Camisa formal para eventos especiales",
        stock: 10,
        price: 79.99,
        image: "/image/camisahom.webp",
        category: "hombre",
        subcategory: "camisas"
    },
    {
        id: 8,
        name: "Sudadera Hombre",
        description: "Sudadera cómoda para el invierno",
        stock: 14,
        price: 49.99,
        image: "/image/sudaderahom.webp",
        category: "hombre",
        subcategory: "sudaderas",
        liquidationDiscount: 20
    },

    // CATEGORÍA: NIÑOS
    {
        id: 9,
        name: "Camiseta Niños",
        description: "Camiseta colorida y cómoda para niños",
        stock: 30,
        price: 19.99,
        image: "/image/camisaniño.webp",
        category: "niños",
        subcategory: "camisetas"
    },
    {
        id: 10,
        name: "Pantalón Niños",
        description: "Pantalón resistente y cómodo para niños",
        stock: 22,
        price: 34.99,
        image: "/image/pantaloniño.webp",
        category: "niños",
        subcategory: "pantalones"
    },
    {
        id: 11,
        name: "Sudadera Niños",
        description: "Sudadera suave y abrigada para niños",
        stock: 18,
        price: 39.99,
        image: "/image/poleraniño.webp",
        category: "niños",
        subcategory: "sudaderas"
    },
    {
        id: 12,
        name: "Conjunto Niños",
        description: "Conjunto de ropa deportiva para niños",
        stock: 12,
        price: 54.99,
        image: "/image/conjuntoniño.webp",
        category: "niños",
        subcategory: "conjuntos"
    }
]

// Obtener todos los productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000)
    })
}

// Obtener productos por categoría
const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filtered = products.filter(product => product.category === category);
            resolve(filtered);
        }, 1000)
    })
}

// Obtener productos en liquidaciÃ³n
const getProductsOnSale = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filtered = products.filter(product => product.liquidationDiscount);
            resolve(filtered);
        }, 1000)
    })
}

// Obtener productos por categoría y subcategoría
const getProductsByCategoryAndSubcategory = (category, subcategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filtered = products.filter(product => 
                product.category === category && product.subcategory === subcategory
            );
            resolve(filtered);
        }, 1000)
    })
}

// Obtener todas las categorías disponibles
const getCategories = () => {
    const categories = new Set(products.map(product => product.category));
    return Array.from(categories);
}

// Obtener subcategorías por categoría
const getSubcategoriesByCategory = (category) => {
    const subcategories = new Set(
        products
            .filter(product => product.category === category)
            .map(product => product.subcategory)
    );
    return Array.from(subcategories);
}

export { 
    getProducts, 
    getProductsByCategory, 
    getProductsOnSale,
    getProductsByCategoryAndSubcategory,
    getCategories,
    getSubcategoriesByCategory
}
