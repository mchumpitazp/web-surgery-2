import React from "react";
import { Button } from "reactstrap";

function Concept () {
    return (
        <>
            <section id="concept">
                <div id="concept-text" className="d-flex flex-column gap-3" data-aos="fade-in">
                    <h2>
                        Plastic Surgery in Atlanta
                    </h2>               
                    <span>Premier Plastic Surgery & Compassionate Care</span>
                    <p>
                        Dr. Nicholas Jones, MD, FACS, is a world-renowned <strong>plastic surgeon in Atlanta</strong> focusing on both aesthetic and reconstructive surgery. It is our goal to ensure that each and <em>every patient leaves with both an aesthetically pleasing and highly functional result, delivered with uncompromising care.</em>
                    </p>
                </div>
                <div className="w-100 d-flex justify-content-start justify-content-sm-center">
                    <Button className="btn-base">
                        Watch Video
                        &nbsp;
                        <img src="./arrow-right.svg" alt="arrow-right" className="arrow-right-white"/>
                    </Button>
                </div>
            </section>

            <div id="concept-img"></div>
        </>
    )
}

export default Concept;