import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ThemeContext } from '../../contexts/ThemContext';
import { FaSun, FaMoon} from "react-icons/fa";

const NavbarHashLink = () => {
    // const { theme, setTheme } = useContext(ThemeContext);
    const { theme, setTheme } = React.useContext(ThemeContext);


    return (
        <>
                <HashLink className="px-4 text-xl font-bold text-gray-500 hover:text-yellow-400" smooth to="/#hero">
                    Home
                </HashLink>
                <HashLink className="px-4 text-xl font-bold text-gray-500 hover:text-yellow-400" smooth to="/#about">
                    About Me
                </HashLink>
                <HashLink className="px-4 text-xl font-bold text-gray-500 hover:text-yellow-400" smooth to="/#projects">
                    Portfolio
                </HashLink>
                <HashLink className="px-4 text-xl font-bold text-gray-500 hover:text-yellow-400" smooth to="/#contact">
                    Contact Me
                </HashLink>
                <Link className="font-extrabold text-gray-500 hover:text-blue-900 transition duration-500 ease-in-out hidden lg:inline-block" to="#">
                        {theme === 'dark' ? (
                            <FaSun
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="hover:animate-pulse text-gray-500 dark:text-gray-400 text-2xl inline-block"
                            />
                        ) : (
                                <FaMoon
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className="hover:animate-pulse text-gray-500 dark:text-gray-400 text-2xl inline-block"
                                />
                            )}
                </Link>
                
                
        </>
    );
};

export default NavbarHashLink;