import React from "react";
import { Row, Col } from 'reactstrap'
import ScheduleForm from "./ScheduleForm";

function Schedule () {
    return(
        <section id="schedule" className="ph50 pv100">
            <Row xs={1} lg={2}>
                <Col lg={5} id="schedule-text" className="mb-lg-0 pe-lg-5 gap-3 gap-lg-4" data-aos="fade-in">
                    <h2>Schedule a Consultation with Dr. Nicholas Jones</h2>
                    <p style={{fontSize: 22}}>Come visit Dr. Jones and our team and let us help you achieve the spectacular look you deserve!</p>
                    <p style={{fontSize: 17}}>3280 Howell Mill Rd NW, Suite 200, Atlanta, GA 30327</p>
                </Col>
                <Col lg={7} data-aos="fade-in">
                    <ScheduleForm />
                </Col>
            </Row>
        </section>
    );
}

export default Schedule;