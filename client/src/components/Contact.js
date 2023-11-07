import React from "react";
import { Button, Col, Row } from "reactstrap";

function Contact () {
    return(
        <section id="contact" data-aos="fade-in">
            <div id="contact-content" className="mw1200">
                <Row xs={1} lg={2} className="d-flex gap-4 gap-lg-0">
                    <Col className="d-flex align-items-center">
                        <img id="contact-logo" src="logo.svg" alt="logo"/>
                    </Col>
                    <Col className="d-flex flex-column text-center gap-4">
                        <span id="contact-phone" style={{fontSize: 28}}>(404) 882-8044</span>
                        <Button className="btn-base align-self-center">   
                            Schedule Consultation
                            &nbsp;
                            <img className="arrow-right-black" src="arrow-right.svg" alt="arrow-right"/>
                        </Button>
                        <p>3280 Howell Mill Rd NW, Suite 200, Atlanta, GA 30327</p>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Contact;