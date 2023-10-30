import { Button } from "reactstrap";

function Doctor () {
    return (
        <section id="doctor">
            <div>
                <img id="doctor-img-logo" src="./logo.svg" alt="logo" className="img-fluid w-100 h-auto"/>
                <img id="doctor-img-doctor" src="./doctor.jpg" alt="doctor" className="img-fluid w-100 h-auto"/>

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
        
                <Button className="btn-base mt-3 mt-sm-0">
                    Continue Reading
                    &nbsp;
                    <img src="./arrow-right.svg" alt="arrow-right" className="arrow-right-white"/>
                </Button>
                
                <div id="doctor-brands" className="d-flex justify-content-between">
                    <span>Img</span>
                    <span>Img</span>
                    <span>Img</span>
                    <span>Img</span>
                    <span>Img</span>
                    <span>Img</span>
                    <span>Img</span>
                    <span>Img</span>
                </div>
            </div>
        </section>
    )
}

export default Doctor;