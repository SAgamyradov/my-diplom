import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<HiOutlineEyeOff />);
  const handleToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(<HiOutlineEye />);
    } else {
      setPasswordType("password");
      setPasswordIcon(<HiOutlineEyeOff />);
    }
  };
  return (
    <section className='flex justify-center mt-20 items-center'>
      <aside className='bg-slate-800 w-[35rem] font-sans p-6 rounded-xl shadow-lg'>
        <header className='font-extrabold text-2xl text-center text-slate-100'>
          Içeri gir
        </header>
        <div className='flex flex-row'>
          <NavLink to={"/register"} className='text-sky-500 text-center ml-2'>
            Registrasiya bolmak
          </NavLink>
        </div>
        <form action='' className='mt-5'>
          <div className='flex flex-row'>
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
              type={passwordType}
              placeholder='Password'
              className='focus:outline-none w-full mt-5 rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900'
            />
            <div className='bg-slate-200 rounded-r-xl mt-5'>
              <div
                onClick={handleToggle}
                className='mr-3 mt-2 text-2xl text-slate-800'
              >
                {passwordIcon}
              </div>
              <div></div>
            </div>
          </div>
          <div className='flex px-26 mt-6 justify-between items-center'>
            <button className='bg-slate-200 p-3 mr-10 rounded-xl hover:bg-sky-500 font-extrabold text-slate-400 hover:text-slate-50'>
              Arassala
            </button>

            <NavLink
              to={"/layout"}
              className='bg-sky-500 p-3 rounded-xl hover:bg-sky-800 font-extrabold text-slate-50'
            >
              Iceri girmek
            </NavLink>
          </div>
        </form>
      </aside>
    </section>
  );
};

export default Login;
