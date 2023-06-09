import React, { FC, useState } from "react";
import cn from "classnames";
import logoImage from "../../assets/Oguzly2.png";
import { GiRooster } from "react-icons/gi";
import { BsTrashFill } from "react-icons/bs";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../../store/Actions/Actions";

const Header: FC = () => {
  const [isShowcart, setIsShowCart] = useState(false);

  const cart = useTypedSelector((state) => state.cart);

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  const dispatch = useDispatch();
  const removeHandler = (id: string) => {
    dispatch(RemoveFromCart(id));
  };

  return (
    <div className='fixed -mt-6 w-full flex items-center justify-between p-4 bg-indigo-900'>
      <img src={logoImage} className='w-28 h-6 md:w-36 md:h-8' />
      <button
        className='bg-transparent border-none relative'
        onClick={() => setIsShowCart(!isShowcart)}
      >
        <GiRooster size={35} className='text-slate-200 cursor-pointer' />
        <div className='text-red-900 border bg-white absolute rounded-full px-[0.3rem] text-[0.7rem] font-montserrat-black -right-2 -bottom-3'>
          {cart.length}
        </div>
      </button>
      <div
        className={cn(
          "bg-slate-100 absolute -top-1 right-0 mx-5 md:mx-12 shadow-sm rounded-md p-3 md:p-7 mt-20 ",
          {
            hidden: !isShowcart,
          }
        )}
      >
        {cart.map((item) => (
          <div className='flex items-center' key={`cart item ${item.name}`}>
            <img
              src={item.imagePath}
              alt={item.name}
              className='w-20 h-20 mx-3 m-2 md:w-16 md:h-14 '
            />
            <div>
              <div>{item.name}</div>
              <div>{item.count * item.price} gr</div>
              <button>
                <BsTrashFill
                  onClick={() => removeHandler(item._id)}
                  className='text-red-500 md:mt-4 mt-3 '
                />
              </button>
            </div>
          </div>
        ))}
        <div className='border-t-2 mt-1 flex flex-col border-red-200'>
          <b>Belok: {total - 129.4} %</b>
          <b>Demir: {total - 129.1} %</b>
          <b>Glikogen: {total - 129.7} %</b>
          <b>Kalsiý: {total - 129.3} %</b>
          <b>Sink: {total - 129.9} %</b>
          <b>Fosfor: {total - 129.5} %</b>
          <b>Uglewod: {total - 129.2} %</b>
          <b>A witamin: {total - 128.7} %</b>
          <b>B witamin: {total - 128.9} %</b>
          <b>E witamin: {total - 128.5} %</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
