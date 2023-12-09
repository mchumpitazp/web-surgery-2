import React from "react";
import { Row, Col } from 'reactstrap'
import ScheduleForm from "./ScheduleForm";

function Schedule () {
    return(
        <section id="schedule" className="ph50 pv100">
            <Row xs={1} lg={2}>
                <Col lg={5} id="schedule-text" className="mb-lg-0 pe-lg-5 gap-3 gap-lg-4" data-aos="fade-in">
                    <h2>Schedule a Consultation with Dr. Yates and Dr. Zahedi</h2>
                    <p style={{fontSize: 22}}>Come visit Dr. Yates and Dr. Zahedi and our team and let us help you achieve the spectacular look you deserve!</p>
                    <p style={{fontSize: 17}}>407 SE 24th St Fort Lauderdale, FL 33316</p>
                </Col>
                <Col lg={7} data-aos="fade-in">
                    <ScheduleForm />
                </Col>
            </Row>
        </section>
    );
}

export default Schedule;