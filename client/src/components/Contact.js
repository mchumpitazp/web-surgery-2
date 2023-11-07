import React from "react";
import { Button } from "reactstrap";

function Contact () {
    return(
        <section id="contact" data-aos="fade-in">
            <div id="contact-content" className="d-flex flex-column justify-content-between align-items-center gap-4">
                <img id="contact-logo" src="logo.svg" alt="logo"/>
                <span id="contact-phone" style={{fontSize: 28}}>(404) 882-8044</span>
                <Button className="btn-base align-self-center">   
                    Schedule Consultation
                    &nbsp;
                    <img className="arrow-right-black" src="arrow-right.svg" alt="arrow-right"/>
                </Button>
                <p>3280 Howell Mill Rd NW, Suite 200, Atlanta, GA 30327</p>
            </div>
        </section>
    );
}

export default Contact;