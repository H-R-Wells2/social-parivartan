import React from 'react';
import { FcSearch } from "react-icons/fc";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const Navbar = () => {



    return (
        <div className='flex items-center w-full bg-slate-600 p-2 text-white py-3 justify-between shadow-md fixed top-0 z-50'>
            <div className='flex items-center'>
                <Link to={'/'} className='sm:ml-4 text-md sm:text-xl font-bold text-center w-24 sm:w-fit'><img src={logo} className='sm:w-40 h-14' alt="social parivartan" /></Link>
            </div>
            <div className='flex text-md sm:text-xl gap-1 sm:gap-4'>
                <div className='hidden sm:flex'>
                    <input placeholder='Search' type="text" className='rounded-l-lg py-1 px-2 text-slate-950 outline-none w-44 placeholder:text-lg' />
                    <FcSearch className='h-full w-7 rounded-r-lg bg-white text-slate-800 cursor-pointer' />
                </div>

                <span className='font-normal flex items-center rounded-md bg-slate-700 shadow-md sm:py-1 py-2 px-2 cursor-pointer sm:w-28 justify-center'>Social</span>
                <span className='font-normal flex items-center rounded-md bg-slate-700 shadow-md py-1 px-2 cursor-pointer sm:w-28 justify-center'>Parivartan</span>

                <Link to={'/login'} className='flex items-center font-normal rounded-md border border-slate-400 bg-slate-700 shadow-md py-1 px-2 cursor-pointer sm:w-28 justify-center'>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Navbar