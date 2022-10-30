import Header from "./header";
import Footer from "./footer";
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