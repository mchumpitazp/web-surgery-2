import React from "react";
import { Form, Row, Col, Input, Button, FormGroup, Label } from "reactstrap";

function ScheduleForm () {
    return(
        <Form id="schedule-form">
            <Row xs={1} lg={2}>
                <Col>
                    <Input 
                        type="text"
                        placeholder="First name *"
                    />
                </Col>
                <Col>
                    <Input 
                        type="text"
                        placeholder="Last name *"
                    />
                </Col>
            </Row>
            <Row xs={1} lg={2}>
                <Col>
                    <Input 
                        type="text"
                        placeholder="Phone number *"
                    />
                </Col>
                <Col>
                    <Input 
                        type="text"
                        placeholder="Email address *"
                    />
                </Col>
            </Row>
            <Row xs={1} lg={2}>
                <Col>
                    <Input 
                        type="number"
                        placeholder="Height (inches) *"
                    />
                </Col>            
                <Col>
                    <Input 
                        type="number"
                        placeholder="Weight (pounds) *"
                    />
                </Col>
            </Row>
            <Row xs={1} lg={2}>
                <Col>
                    <Input
                        type="select"
                    >
                        <option selected disabled>When do you plan on having surgery? *</option>
                        <option>1-2 months</option>
                        <option>&gt; 2 months</option>
                    </Input>
                </Col>
                <Col>
                    <Input 
                        type="select"
                    >
                        <option selected disabled>Preferred method of contact *</option>
                        <option>Email</option>
                        <option>Phone</option>
                    </Input>
                </Col>
            </Row>  
            <Row xs={1} lg={2}>
                <Col>
                    <Input 
                        type="select"
                    >
                        <option selected disabled>Do you have any medical problems?</option>
                        <option>No</option>
                        <option>Yes</option>
                    </Input>
                </Col>
                <Col>
                    <Input 
                        type="select"
                        placeholder="Procedure of interest"
                    >
                        <option selected disabled>Procedure of interest</option>
                        <option value="Botox">Botox</option>
                        <option value="Brazilian Butt Lift">Brazilian Butt Lift</option>
                        <option value="Breast Augmentation">Breast Augmentation</option>
                        <option value="Breast Lift">Breast Lift</option>
                        <option value="Breast Reduction">Breast Reduction</option>
                        <option value="Chemical Peels">Chemical Peels</option>
                        <option value="Injectables and Fillers">Injectables and Fillers</option>
                        <option value="Labiaplasty">Labiaplasty</option>
                        <option value="Liposuction">Liposuction</option>
                        <option value="Lymphatic Massage &amp; Cavitation">Lymphatic Massage &amp; Cavitation</option>
                        <option value="Male BBL">Male BBL</option>
                        <option value="Male Body Contouring">Male Body Contouring</option>
                        <option value="Mommy Makeover">Mommy Makeover</option>
                        <option value="Post Operation Care">Post Operation Care</option>
                        <option value="QWO">QWO</option>
                        <option value="Tummy Tuck">Tummy Tuck</option>
                    </Input>
                </Col>
            </Row>
            <Row xs={1} lg={2}>
                <Col>
                    <Input 
                        type="select"
                    >
                        <option selected disabled>How did you hear about us?</option>
                        <option>Search engine (Google, Yahoo, ...)</option>
                        <option>Friend</option>
                        <option>Word of Mouth</option>
                        <option>Press/Article</option>
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>Youtube</option>
                        <option>Other</option>
                    </Input>
                </Col>
                <Col>
                    <Input
                        type="select"
                    >
                        <option selected disabled>Best time to reach you</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                    </Input>

                        
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Input
                        type="textarea"
                        placeholder="How can we assist your aesthetic needs?"
                    />
                </Col>
            </Row>

            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
                <div className="order-lg-2 mb-4 mb-lg-0">
                    <FormGroup check>
                        <Input type="checkbox" className="me-2"/>
                        <Label check className="pt-1">Opt-in for monthly emails</Label>
                    </FormGroup>
                </div>
                <div className="order-lg-1 me-0 me-lg-4">
                    <Button className="btn-base" type="submit">
                        Schedule Consultation
                        &nbsp;
                        <img className="arrow-right-white" src="./arrow-right.svg" alt="arrow-right"/>
                    </Button>
                </div>
                
            </div>
        </Form>
    );
}

export default ScheduleForm;