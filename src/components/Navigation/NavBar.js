import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [top, setTop] = useState(true);
    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 dark:bg-slate-900 ${!top && 'bg-white shadow-lg'}`}>

<div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row justify-center mx-3 items-center text-center font-semibold">
                <a>
                    Mahfuz
                     {/* <img src={Logo} alt="portfolio logo" className="w-8 h-8 ml-12 lg:ml-4"/> */}
               </a>
this is nav bar
                
             </div>
</div>


        </nav>
    //     <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 dark:bg-slate-900 ${!top && 'bg-white shadow-lg'}`}>
    //     this is navbar
        
    //     {/* <div className="flex flex-row justify-between items-center py-2">
    //         <div className="flex flex-row justify-center mx-3 items-center text-center font-semibold">
    //             <Link to="/">
    //                 <img src={Logo} alt="portfolio logo" className="w-8 h-8 ml-12 lg:ml-4"/>
    //             </Link>
                
    //         </div>

    //         <div className="lg:hidden">
    //             <Toggle/>
    //         </div>
            
    //         <div className="group flex flex-col mx-3">
    //             <button className="p-2 lg:hidden text-slate-900 bg-gray-50 dark:bg-transparent dark:text-yellow-400" onClick={handleClick}>
    //                 {isOpen &&(
    //                     <HiX className='text-3xl'/>
    //                 )}
    //                 {!isOpen &&(
    //                     <HiMenuAlt1 className='text-3xl'/>
    //                 )}
    //             </button>
    //             <div className='hidden space-x-4 flex items-center mr-8 py-4 lg:inline-block'>
    //                 <NavLinks />
    //             </div>

    //             <div className={`fixed flex justify-center text-center items-center left-0 w-full h-1/2 p-24 bg-white block lg:hidden shadow-xl dark:bg-slate-900 top-14 ${  isOpen ? "block" : "hidden" } `}>
    //                 <div className='flex flex-col space-y-8'>
    //                     <NavLinks />
    //                 </div>                                                
    //             </div>

    //         </div>
    //     </div> */}
    // </nav>
    )
}

export default NavBar;