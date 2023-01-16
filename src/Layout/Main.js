import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
// import Footer from '../Pages/Shared/Footer/Footer';
// import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
  return (
    <div className="hero py-4" id="hero">
      <NavBar></NavBar>

      <Outlet></Outlet>
      <div>Footer</div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
