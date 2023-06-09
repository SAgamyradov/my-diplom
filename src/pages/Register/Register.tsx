import React, { useState } from "react";
import {
  HiOutlineClipboardList,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineMail,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Bgimage from "../../assets/5.jpeg";

const Register = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const handleToggle = () => setTogglePassword(!togglePassword);

  return (
    <div
      className='p-12 relative bg-cover h-screen  bg-no-repeat'
      style={{
        backgroundImage: `url(${Bgimage})`,
      }}
    >
      <section className='flex flex-col justify-center mt-20 items-center'>
        <aside className='bg-slate-50 font-sans xl:p-6 p-3 rounded-xl shadow-lg'>
          <header className='font-extrabold text-2xl text-slate-800'>
            Täze döretmek
          </header>
          <div className='flex flex-row'>
            <h1 className='text-slate-400'>Sende öň barmy? </h1>
            <NavLink to={"/login"} className='text-white ml-2'>
              Içeri gir
            </NavLink>
          </div>
          <form className='mt-5'>
            <div className=''>
              <div className='flex flex-row'>
                <input
                  type='text'
                  placeholder='Ady'
                  className='focus:outline-none  rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900'
                />
                <div className='bg-slate-200 rounded-r-xl mr-3'>
                  <HiOutlineClipboardList
                    size={24}
                    className='mr-3 mt-2 text-slate-800'
                  />
                </div>
              </div>

              <div className='flex flex-row mt-3'>
                <input
                  type='text'
                  placeholder='Familýasy'
                  className='focus:outline-none rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900'
                />
                <div className='bg-slate-200 rounded-r-xl'>
                  <HiOutlineClipboardList
                    size={24}
                    className='mr-3 mt-2 text-slate-800'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-row '>
              <input
                type='email'
                placeholder='Email'
                className='focus:outline-none w-full mt-5 rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900'
              />
              <div className='bg-slate-200 rounded-r-xl mt-5'>
                <HiOutlineMail size={24} className='mr-3 mt-2 text-slate-800' />
              </div>
            </div>

            <div className='flex flex-row'>
              <input
                type={togglePassword ? "password" : "text"}
                placeholder='Password'
                className='focus:outline-none w-full mt-5 rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900'
              />
              <div className='bg-slate-200 rounded-r-xl mt-5'>
                <button type='button' onClick={handleToggle}>
                  <HiOutlineEyeOff
                    size={24}
                    className='mr-3 mt-2 text-slate-800'
                  />
                  <HiOutlineEye
                    size={24}
                    className='mr-3 mt-2  text-slate-800'
                  />
                </button>
              </div>
            </div>
            <div className='flex px-2 mt-6 justify-between items-center'>
              <button className='bg-slate-200 p-3 rounded-xl hover:bg-sky-500 font-extrabold text-slate-400 hover:text-slate-50'>
                Başga metod
              </button>
              <button className='bg-sky-500 p-3 rounded-xl hover:bg-sky-800 font-extrabold text-slate-50'>
                <NavLink to={"/login"}>Täze döretmek</NavLink>
              </button>
            </div>
          </form>
        </aside>
      </section>
    </div>
  );
};

export default Register;
