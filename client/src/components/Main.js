import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./Hero";
import Header from "./Header";
import Concept from "./Concept";
import Doctor from "./Doctor";
import FooterSticky from "./FooterSticky";
import Footer from "./Footer";

function Main () {
    React.useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 0,
            easing: 'ease',
            once: true,
            mirror: true
        });
    }, [])

    return (
        <>
            <Header />
            <Hero />
            <Concept />
            <Doctor />
            <div id="temp"></div>
            <Footer />            
            <FooterSticky />
        </>
    );
}

export default Main;