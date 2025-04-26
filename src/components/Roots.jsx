import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

const Roots = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
            
        </>
    );
};

export default Roots;