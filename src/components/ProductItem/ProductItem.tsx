import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "../../interface/types";
import { AddToCart } from "../../store/Actions/Actions";
import Quantity from "../Quantity/Quantity";

interface IProductItem {
  product: IProduct;
}
const ProductItem: FC<IProductItem> = ({ product }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(AddToCart(product, count));
  };
  return (
    <div className='shadow-md rounded-md md:w-96 w-[17rem]  mt-5 pt-16  flex flex-col mx-auto items-center justify-center'>
      <img
        src={product.imagePath}
        alt={product.name}
        className='w-40 rounded-xl mx-12 '
      />
      <div className='text-lg'>{product.name}</div>
      <div className='text-sm text-gray-600 font-montserrat-black my-1'>
        {product.price} gr
      </div>
      <Quantity count={count} setCount={setCount} />
      <button
        onClick={addHandler}
        className='bg-purple-600 hover:bg-blue-900 duration-300 text-slate-200 p-2 mx-16 m-2 rounded-lg'
      >
        Hasaplama goş
      </button>
    </div>
  );
};

export default ProductItem;
