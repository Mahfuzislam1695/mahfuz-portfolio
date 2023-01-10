import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar';
// import Footer from '../Pages/Shared/Footer/Footer';
// import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;