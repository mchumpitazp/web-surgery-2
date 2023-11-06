import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./Hero";
import Header from "./Header";
import Concept from "./Concept";
import Procedure from "./Procedure";
import Doctor from "./Doctor";
import Testimonials from "./Testimonionials";
import Video from "./Video";
import Options from "./Options";
import SocialMedia from "./SocialMedia";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Footer from "./Footer";
import FooterSticky from "./FooterSticky";
import FooterStatement from "./FooterStatement";

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
            <Testimonials />
            <Video />
            <Options />
            <SocialMedia />
            <Schedule />
            <Contact />
            <Footer />
            <FooterStatement />            
            <FooterSticky />
        </>
    );
}

export default Main;