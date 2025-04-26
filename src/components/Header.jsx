import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav className='text-center mt-8 text-3xl text-blue-700 '>
            <ul className=' space-x-4'>
                <NavLink  className={({ isActive }) => (isActive ? " underline " : " hover:text-blue-300 ")} to='/'>Home</NavLink>
                
                <NavLink className={({ isActive }) => (isActive ? " underline " : " hover:text-blue-300 ")} to='/login'>Login</NavLink>
                
            </ul>
        </nav>
    );
};

export default Header;