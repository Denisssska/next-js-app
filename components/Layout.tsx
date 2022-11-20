import Header from "./Header";
import Footer from "./Footer";
import React from "react";

type LayoutType = {
    children: React.ReactNode
}
const Layout = ({children}: LayoutType) => {

    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>

    );
};

export default Layout;