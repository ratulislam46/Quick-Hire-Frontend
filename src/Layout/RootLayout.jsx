import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main className='min-h-[calc(100vh-200px)] relative z-10'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default RootLayout;