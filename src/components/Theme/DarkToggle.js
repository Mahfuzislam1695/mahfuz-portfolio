import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from '../../contexts/ThemContext';

const DarkToggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div
             className="transition 
            duration-500 
            ease-in-out 
            rounded-full 
            p-2">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500
                    hover:animate-pulse
                    dark:text-gray-400 
                    text-2xl 
                    cursor-pointer"
                />
            ) : (
                    <FaMoon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500
                        hover:animate-pulse
                        dark:text-gray-400 
                        text-2xl 
                        cursor-pointer"
                    />
                )}
        </div>
    );
};

export default DarkToggle;