import { Button, Row, Col } from "reactstrap";

function Doctor () {

    const DoctorBrands = () => {
        const brands = ['IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG', 'IMG'];
        let delay = -250;

        return brands.map((b, i) => {
            delay += 250;
            return (
                <img className="doctor-brands" src={`./${b}`} alt={b} key={b+i}
                    data-aos="fade-in" data-aos-delay={delay} 
                    data-aos-duration={1000} data-aos-offset={-500}/>
            );            
        });
    }

    return (
        <section id="doctor" className="mb150 ph50 pt200">
            <Row>
                <Col xs={12} lg={6} className="offset-lg-6">
                    <img id="doctor-img-logo" src="./logo.svg" alt="logo" className="img-fluid w-100 h-auto"/>
                    <img id="doctor-img-doctor" src="./doctor.jpg" alt="doctor" className="img-fluid w-100 h-auto d-lg-none"/>

                    <p>
                        Double-board certified <strong>Atlanta plastic surgeon</strong>, Dr. Nicholas Jones is certified by the American Board of Plastic Surgery and, specializing in both aesthetic and reconstructive surgery.
                    </p>
                    <p id="p-smaller">
                        Dr. Jones has a philosophy of providing high quality aesthetic and functional results while maintaining the utmost professionalism, safety, and comfort. Dr. Jones graduated general surgery training at Albert Einstein Medical Center and went on to plastic surgery training at the Medical College of Georgia. After graduating with full certification, he completed an internship with Dr. Marcelo Araujo, a world-renowned cosmetic surgeon in Sao Paulo, Brazil.
                    </p>
                    
                    <Button className="btn-base me-4">
                        Watch My Video
                        &nbsp;
                        <img src="./arrow-right.svg" alt="arrow-right" className="arrow-right-white"/>
                    </Button>
            
                    <Button className="btn-base my-3">
                        Continue Reading
                        &nbsp;
                        <img src="./arrow-right.svg" alt="arrow-right" className="arrow-right-white"/>
                    </Button>
                </Col>
                <Col xs={12} className="vw-100 d-flex justify-content-between mb50 pt100">
                    <DoctorBrands />
                </Col>
            </Row>            
        </section>
    )
}

export default Doctor;