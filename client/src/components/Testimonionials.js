import React from "react";
import { Carousel, CarouselItem, CarouselControl, Button, Row, Col } from 'reactstrap';

function Testimonials () {
    const data = [
        {
            first: '“Dr. Yates was very personable and patient as she explained my surgery to me.”',
            second: 'She is so informative as well as resourceful. We need more doctors that are approachable. She made me feel like she cares not just for me but all of his patients.'
        },
        {
            first: '“I give Dr. Yates five stars.”',
            second: 'She\'s a great surgeon, has a great personality and she really cares. She explained everything to me, my husband and she even called me after my surgery.'
        },
        {
            first: '“Dr. Yates was absolutely great.”',
            second: 'I flew in from out of town, to see Dr. Nicholas Yates, which came Highly recommended by a friend. I’m certainly pleased with Dr. Nicholas Yates. I will follow him wsherever she goes! Great Spirit surgeon, great personality!'
        }
    ]

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = data.map((t, i) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={i}>
                <div className="testimonial-item">
                    <h2 className="mb-3">{t.first}</h2>
                    <p>{t.second}</p>
                </div>
            </CarouselItem>
        );
    });

    return(
        <section id="testimonials" className="ph50 mb150">
            <Carousel interval={false} activeIndex={activeIndex} next={next} previous={previous} dark>
                {slides}

                <div className="d-flex justify-content-between py-5 py-lg-3">
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </div>

                <Button className="btn-base">
                    Read More Patient Testimonials
                    &nbsp;
                    <img src="./arrow-right.svg" alt="arrow-right" className="arrow-right-white"/>
                </Button>
                
            </Carousel>

            <Row xs={1} sm={2} md={3} lg={4}>
                <Col>
                    <img className="img1" src="./testimonial_logo_1.png" alt="testimonial_logo_1"/>
                    <img className="img2" src="./five-stars.svg" alt="five-stars"/>
                </Col>
                <Col>
                    <img className="img1" src="./testimonial_logo_2.png" alt="testimonial_logo_2"/>
                    <img className="img2" src="./five-stars.svg" alt="five-stars"/>
                </Col>
                <Col>
                    <img className="img1" src="./testimonial_logo_3.png" alt="testimonial_logo_3"/>
                    <img className="img2" src="./five-stars.svg" alt="five-stars"/>
                </Col>
                <Col>
                    <img className="img1" src="./testimonial_logo_4.png" alt="testimonial_logo_4"/>
                    <img className="img2" src="./five-stars.svg" alt="five-stars"/>
                </Col>
            </Row>
        </section>        
    );       
}

export default Testimonials;