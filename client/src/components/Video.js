import React from "react";
import { Modal } from "reactstrap";

function Video() {
    const [modal, setModal] = React.useState(false);
    
    const toggle = () => setModal(!modal);

    return(
        <section id="video" onClick={toggle}>
            <div id="video-content">
                <h2 className="m-0">Meet Dr. Nicholas Jones</h2>
                <p className="mb-3">Your Trusted Atlanta Plastic Surgeon</p>
                <img src="./icon-play.svg" alt="icon-play"/>
            </div>

            <Modal isOpen={modal} toggle={toggle} centered>
                <button onClick={toggle} type="button" className="btn-close btn-close-white" aria-label="Close"></button>
                <iframe title="Doctor video" width="100%" height="100%"
                    src="https://player.vimeo.com/video/400060651?title=0&byline=0&portrait=0&autoplay=1">
                </iframe>                
            </Modal>
        </section>
    );
}

export default Video;