import React from 'react';
import NavBar from '../Navigation/NavBar';

const Hero = () => {
    return (
        <div 
        className="hero py-4" 
        id='hero'
    >
        <div>
                    <NavBar />
                </div>
                <div 
                    className="
                    max-w-screen 
                    mt-12 
                    p-4 
                    md:p-12"
                    ></div>
            Hi i am mahfuz islam
        </div>
    );
};

export default Hero;