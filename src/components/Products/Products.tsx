import React from "react";
import { IProduct } from "../../interface/types";
import img2 from "../../assets/mek.jpg";
import img3 from "../../assets/otun.jpeg";
import img4 from "../../assets/sunkun.jpg";
import img5 from "../../assets/arpa.jpg";
import img6 from "../../assets/pota.jpg";
import ProductItem from "../ProductItem/ProductItem";

const products: IProduct[] = [
  {
    _id: "1",
    imagePath: img2,
    name: "Mekge 300gr",
    price: 23.5,
  },
  {
    _id: "2",
    imagePath: img3,
    name: "Ot uny",
    price: 50,
  },
  {
    _id: "3",
    imagePath: img4,
    name: "Süňk uny",
    price: 12,
  },
  {
    _id: "4",
    imagePath: img5,
    name: "Arpa",
    price: 23,
  },
  {
    _id: "5",
    imagePath: img6,
    name: "Gaýnadylan kartoşka",
    price: 45,
  },
];

const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Products;
