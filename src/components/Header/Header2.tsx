import React from "react";
import Tilt from "react-parallax-tilt";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { SiGithub } from "react-icons/si";

const Header2 = (): JSX.Element => {
  return (
    <aside className='container mx-4 pt-10 w-[22.7rem] xl:w-96 mt-4 col-span-12 lg:col-span-5 2xl:col-span-4  h-68 xl:h-72 xl:sticky xl:top-5 '>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareColor='lightblue'
        glarePosition='all'
      >
        <header className=' bg-gray-900 text-gray-100 px-8 lg:px-10 pt-5 pb-10 rounded-xl'>
          <section className='flex flex-col justify-center lg:justify-start lg:items-start'>
            <aside className='flex items-center'>
              <img
                width='100px'
                height='90px'
                className='rounded-lg mr-3'
                src='/images/serdar.jpg'
                alt='Serdar'
              />
              <section className='flex flex-col items-start'>
                <div className='font-montserrat-bold text-2xl'>
                  Serdar Agamyradov
                </div>
              </section>
            </aside>

            <main className='flex flex-col'>
              <aside className='font-montserrat-medium text-sm flex justify-between mt-10 flex-col'>
                <aside className='mb-6 flex items-center space-x-3'>
                  <div className='w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg'>
                    <FaPhoneAlt size={18} />
                  </div>
                  <div className='flex flex-col'>
                    <p> Phone: </p>
                    <small className='text-gray-400'> +99364667428 </small>
                  </div>
                </aside>

                <aside className='mb-6 flex items-center space-x-3'>
                  <div className='w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg'>
                    <MdEmail size={18} />
                  </div>
                  <div className='flex flex-col'>
                    <p> Email: </p>
                    <small className='text-gray-400'>
                      agamyradowserdar777@gmail.com
                    </small>
                  </div>
                </aside>

                <aside className='mb-6 flex items-center space-x-3'>
                  <div className='w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg'>
                    <SiGithub size={18} />
                  </div>
                  <div className='flex flex-col'>
                    <p> Github: </p>
                    <small className='text-gray-400'>
                      https://github.com/SAgamyradov
                    </small>
                  </div>
                </aside>

                <aside className='mb-6 flex items-center space-x-3'>
                  <div className='w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg'>
                    <MdLocationPin size={18} />
                  </div>
                  <div className='flex flex-col'>
                    <p> Location: </p>
                    <small className='text-gray-400'>Mary, Turkmenistan</small>
                  </div>
                </aside>

                <aside className='flex items-center space-x-3'>
                  <div className='w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg'>
                    <FaTelegramPlane size={18} />
                  </div>
                  <div className='flex flex-col'>
                    <p> Telegram: </p>
                    <small className='text-gray-400'>t.me/sagamyradow</small>
                  </div>
                </aside>
              </aside>
            </main>
          </section>
          <img
            src='/images/Oguzly.svg'
            alt='Oguzly'
            width='192px'
            height='73px'
            className=' mx-auto p-5 mt-10'
          />
        </header>
      </Tilt>
    </aside>
  );
};

export default Header2;
