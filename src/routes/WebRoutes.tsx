import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import store from "../store/store";
import Register from "../pages/Register/Register";
import Layout from "../components/Layout/Layout";

const WebRoutes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/layout' element={<Layout />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default WebRoutes;
