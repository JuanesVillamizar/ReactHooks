import React from 'react';
import Nav from './Nav';
import {UserProvider} from '../context/UserContext';
import {ClickProvider} from "../context/ClickContext";
import Footer from './Footer';

export const Layout = ({ children }) => {
    return (
        <>
            <UserProvider>
                <ClickProvider>
                    <Nav />
                    {children}
                    <Footer />
                </ClickProvider>
            </UserProvider>
        </>
    );
}
export default Layout;