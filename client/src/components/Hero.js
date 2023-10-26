import React from "react";
import { Container } from "reactstrap";
import Footer from "./Footer";

function Hero () {
    
    return (
        <>        
            <section id="hero">            
                <Container id="hero-main" className="vh-100 d-flex justify-content-center align-items-center">
                    <h1 className="text-center">Atlanta's Premium Plastic Surgeon</h1>

                    <div id="hero-brands">
                        <span>BRAND</span>
                        <span>BRAND</span>
                        <span>BRAND</span>
                        <span>BRAND</span>
                    </div>
                </Container>

                <Footer />
            </section>

            <section id="hero-bottom" className="d-flex justify-content-center text-center">
                <span>We offer post-operative and lymphatic massages</span>
            </section>
        </>
    );
}

export default Hero;