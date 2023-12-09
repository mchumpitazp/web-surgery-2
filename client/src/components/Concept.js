import React from "react";
import { Button } from "reactstrap";

function Concept () {
    return (
        <>
            <section id="concept">
                <div className="pv140 ph50">
                    <div id="concept-content" className="mw900 d-flex flex-column gap-3 gap-lg-4 text-center" data-aos="fade-in">
                        <h2>
                            Plastic Surgery in Florida
                        </h2>               
                        <span>Committed To Excellence In Plastic Surgery</span>
                        <p>
                            Dr. Yates and Dr. Zahedi specialize in the latest and <strong>most innovative techniques in cosmetic and reconstructive plastic surgery</strong>.  He is widely regarded for his SMAS face lifts and neck lifts, rhinoplasties (nose surgery), and blepharoplasties.  His practice is designed around personalized patient care and unparalleled professionalism.
                        </p>
                        <div className="w-100 d-flex justify-content-start justify-content-sm-center">
                            <Button className="btn-base">
                                Watch Video
                                &nbsp;
                                <img src="./arrow-right.svg" alt="arrow-right" className="arrow-right-white"/>
                            </Button>
                        </div>
                    </div>
                </div>                
            </section>

            <div id="concept-after" className="mb150"></div>
        </>
    )
}

export default Concept;