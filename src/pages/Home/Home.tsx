import React from "react";
import Login from "../Login/Login";
// import Register from "../Register/Register";
import Bgimage from "../../assets/5.jpeg";

const Home = () => {
  return (
    <div>
      <div
        className='p-12 relative bg-cover h-screen  bg-no-repeat'
        style={{
          backgroundImage: `url(${Bgimage})`,
        }}
      >
        <Login />
      </div>
      {/* <Register /> */}
    </div>
  );
};

export default Home;
