import { collection, doc, getDocs, query, setDoc, where, writeBatch } from "firebase/firestore";
import db from "../db/db";

const productsSeed = [
  {
    id: 1,
    name: "Vestido Elegante",
    description: "Vestido elegante para ocasiones especiales",
    stock: 15,
    price: 89,
    image: "/image/vestido.webp",
    category: "mujer",
    subcategory: "vestidos",
    liquidationDiscount: 30,
  },
  {
    id: 2,
    name: "Blusa Casual",
    description: "Blusa casual comoda para el dia a dia",
    stock: 20,
    price: 34,
    image: "/image/blusa.webp",
    category: "mujer",
    subcategory: "blusas",
    liquidationDiscount: 15,
  },
  {
    id: 3,
    name: "Pantalon",
    description: "Pantalon deportivo para actividades al aire libre",
    stock: 18,
    price: 59,
    image: "/image/pantalon.webp",
    category: "mujer",
    subcategory: "pantalones",
    liquidationDiscount: 25,
  },
  {
    id: 4,
    name: "Sudadera",
    description: "Sudadera comoda y abrigada",
    stock: 12,
    price: 44,
    image: "/image/sudadera.webp",
    category: "mujer",
    subcategory: "sudaderas",
    liquidationDiscount: 30,
  },
  {
    id: 5,
    name: "Polo Deportivo",
    description: "Polo deportivo para actividades al aire libre",
    stock: 25,
    price: 39,
    image: "/image/polodeportivo.webp",
    category: "hombre",
    subcategory: "camisetas",
  },
  {
    id: 6,
    name: "Pantalon Casual Hombre",
    description: "Pantalon casual comodo para el dia a dia",
    stock: 16,
    price: 59,
    image: "/image/pantalonh.webp",
    category: "hombre",
    subcategory: "pantalones",
  },
  {
    id: 7,
    name: "Camisa Formal",
    description: "Camisa formal para eventos especiales",
    stock: 10,
    price: 79,
    image: "/image/camisahom.webp",
    category: "hombre",
    subcategory: "camisas",
  },
  {
    id: 8,
    name: "Sudadera Hombre",
    description: "Sudadera comoda para el invierno",
    stock: 14,
    price: 49,
    image: "/image/sudaderahom.webp",
    category: "hombre",
    subcategory: "sudaderas",
    liquidationDiscount: 20,
  },
  {
    id: 9,
    name: "Camiseta Niño",
    description: "Camisa colorida y comoda para niños",
    stock: 30,
    price: 19,
    image: "/image/camisaniño.webp",
    category: "niños",
    subcategory: "camisetas",
  },
  {
    id: 10,
    name: "Pantalon Ninos",
    description: "Pantalon resistente y comodo para ninos",
    stock: 22,
    price: 34,
    image: "/image/pantaloniño.webp",
    category: "niños",
    subcategory: "pantalones",
  },
  {
    id: 11,
    name: "Sudadera Ninos",
    description: "Sudadera suave y abrigada para ninos",
    stock: 18,
    price: 39.99,
    image: "/image/poleraniño.webp",
    category: "niños",
    subcategory: "sudaderas",
  },
  {
    id: 12,
    name: "Conjunto Niños",
    description: "Conjunto de ropa deportiva para niños",
    stock: 12,
    price: 54,
    image: "/image/conjuntoniño.webp",
    category: "niños",
    subcategory: "conjuntos",
  },
];

const productsCollection = collection(db, "products");

const mapProductsSnapshot = (snapshot) =>
  snapshot.docs.map((productSnapshot) => {
    const data = productSnapshot.data();

    return {
      docId: productSnapshot.id,
      ...data,
      id: data.id ?? productSnapshot.id,
    };
  });

const ensureProductsSeeded = async () => {
  const snapshot = await getDocs(productsCollection);

  if (!snapshot.empty) {
    return snapshot;
  }

  await seedProductsToFirebase();
  return getDocs(productsCollection);
};

const getProducts = async () => {
  const snapshot = await ensureProductsSeeded();
  return mapProductsSnapshot(snapshot);
};

const getProductsByCategory = async (category) => {
  await ensureProductsSeeded();
  const productsByCategoryQuery = query(productsCollection, where("category", "==", category));
  const snapshot = await getDocs(productsByCategoryQuery);
  return mapProductsSnapshot(snapshot);
};

const getProductsOnSale = async () => {
  await ensureProductsSeeded();
  const productsOnSaleQuery = query(productsCollection, where("liquidationDiscount", ">", 0));
  const snapshot = await getDocs(productsOnSaleQuery);
  return mapProductsSnapshot(snapshot);
};

const getProductsByCategoryAndSubcategory = async (category, subcategory) => {
  await ensureProductsSeeded();
  const productsQuery = query(
    productsCollection,
    where("category", "==", category),
    where("subcategory", "==", subcategory)
  );
  const snapshot = await getDocs(productsQuery);
  return mapProductsSnapshot(snapshot);
};

const getCategories = async () => {
  const products = await getProducts();
  return [...new Set(products.map((product) => product.category))];
};

const getSubcategoriesByCategory = async (category) => {
  const products = await getProductsByCategory(category);
  return [...new Set(products.map((product) => product.subcategory))];
};

const seedProductsToFirebase = async () => {
  const batch = writeBatch(db);

  productsSeed.forEach((product) => {
    const productRef = doc(db, "products", String(product.id));
    batch.set(productRef, product);
  });

  await batch.commit();
  return productsSeed;
};

const upsertProductInFirebase = async (product) => {
  const productRef = doc(db, "products", String(product.id));
  await setDoc(productRef, product, { merge: true });
  return product;
};

export {
  getProducts,
  getProductsByCategory,
  getProductsOnSale,
  getProductsByCategoryAndSubcategory,
  getCategories,
  getSubcategoriesByCategory,
  productsSeed,
  seedProductsToFirebase,
  upsertProductInFirebase,
};
