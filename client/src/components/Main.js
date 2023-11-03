import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./Hero";
import Header from "./Header";
import Concept from "./Concept";
import Procedure from "./Procedure";
import Doctor from "./Doctor";
import Options from "./Options";
import SocialMedia from "./SocialMedia";
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
            <Procedure />
            <Doctor />
            <Options />
            <SocialMedia />
            <div id="temp"></div>
            <Footer />            
            <FooterSticky />
        </>
    );
}

export default Main;