import { useRef, useState, useEffect, useContext } from 'react';
import { FcSearch } from "react-icons/fc";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import authContext from '../context/auth/authContext';
import blanckProfile from '../assets/blanckprofile.jpg';

const Navbar = () => {
    const { decoded } = useContext(authContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleProfileClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleMenuClick = (menuOption) => {
        console.log(`Clicked ${menuOption}`);
        setIsDropdownOpen(false);
    };

    return (
        <div className='flex items-center w-full bg-slate-600 p-2 text-white py-3 justify-between shadow-md sticky top-0 z-50'>
            <div className='flex items-center'>
                <Link to={'/'} className='sm:ml-4 text-md sm:text-xl font-bold text-center w-24 sm:w-fit'><img src={logo} className='sm:w-32 h-10' alt="social parivartan" /></Link>
            </div>
            <div className='flex text-md sm:text-xl gap-1 sm:gap-4'>
                <div className='hidden sm:flex'>
                    <input placeholder='Search' type="text" className='rounded-l-lg py-1 px-2 text-slate-950 outline-none w-44 placeholder:text-lg' />
                    <FcSearch className='h-full w-7 rounded-r-lg bg-white text-slate-800 cursor-pointer' />
                </div>

                <span className='font-normal flex items-center rounded-md bg-slate-700 shadow-md sm:py-1 py-2 px-2 cursor-pointer sm:w-28 justify-center'>Social</span>
                <span className='font-normal flex items-center rounded-md bg-slate-700 shadow-md py-1 px-2 cursor-pointer sm:w-28 justify-center'>Parivartan</span>

                <div className="relative">
                    <img src={decoded ? decoded.picture : blanckProfile} alt="profile" className='h-10 w-10 rounded-full cursor-pointer' onClick={handleProfileClick} />
                    {isDropdownOpen && (
                        <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                <Link to={'/login'}
                                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full "
                                    role="menuitem"
                                    tabIndex="-1"
                                    onClick={() => handleMenuClick('Button 1')}
                                >
                                    Login
                                </Link>
                                <button
                                    className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    tabIndex="-1"
                                    onClick={() => handleMenuClick('Button 2')}
                                >
                                    Button 2
                                </button>
                                <button
                                    className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-t-2"
                                    role="menuitem"
                                    tabIndex="-1"
                                    onClick={() => handleMenuClick('Button 3')}
                                >
                                    Button 3
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
