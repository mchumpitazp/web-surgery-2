import React from "react";
import { Button, Col, Row } from "reactstrap";

function Contact () {
    return(
        <section id="contact" data-aos="fade-in">
            <div id="contact-content" className="mw1200">
                <Row xs={1} lg={2} className="d-flex gap-4 gap-lg-0">
                    <Col lg={5} className="d-flex align-items-center justify-content-center">
                        <img id="contact-logo" src="logo.png" alt="logo"/>
                    </Col>
                    <Col className="d-flex flex-column text-center gap-4">
                        <span id="contact-phone" style={{fontSize: 28}}>(954) 463-5208</span>
                        <Button className="btn-base align-self-center">   
                            Schedule Consultation
                            &nbsp;
                            <img className="arrow-right-black" src="arrow-right.svg" alt="arrow-right"/>
                        </Button>
                        <p>407 SE 24th St Fort Lauderdale, FL 33316</p>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Contact;