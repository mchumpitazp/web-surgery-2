import React from "react";
import $ from 'jquery';
import { List } from "reactstrap";

function Procedure () {
    React.useEffect(() => {
        $('.flexy-item-options li').attr('data-aos', 'fade-up');
        $('.flexy-item-options li').attr('data-aos-duration', '400');
    }, []);

    const useOutsideClick = () => {
        const ref = React.useRef(null);
        React.useEffect(() => {
            const handleClick = (e) => {
                if (ref.current && !ref.current.contains(e.target)) {
                    $(ref.current).removeClass('transition');
                    $(ref.current).find('.flexy-item-options').fadeOut(400);
                }
            };
            document.addEventListener('click', handleClick);
            return () => { document.removeEventListener('click', handleClick); }
        }, []);
        return ref;
    }

    const handleInsideClick = (e) => {
        if (!$(e.target).hasClass('transition')) {
            $(e.target).find('li').removeClass('aos-animate').delay(100).queue(function() {
                $(this).addClass('aos-animate').dequeue();
            });
            $(e.target).addClass('transition');
            $(e.target).find('.flexy-item-options').fadeIn(400).css('display', 'flex');
        }        
    }

    return (
        <section id="procedure">
            <div id="procedure-text" className="d-flex flex-column gap-3 text-center" data-aos="fade-in">
                <h2>Find your Procedure</h2>
                <span>Aesthetic Procedures & Non-Surgical Enhancement In Atlanta</span>
            </div>

            <div id="procedure-flexy">
                <div className="flexy-item" ref={useOutsideClick()} onClick={handleInsideClick} data-aos="fade-in">
                    <img className="flexy-item-bg" src="./flexy1.jpeg" alt="flexy"/>
                    <h1 className="flexy-item-title">Body</h1>
                    <div className="flexy-item-options">
                        <List type="unstyled" className="m-0">
                            <li data-aos-delay="0">Arm Lift</li>
                            <li data-aos-delay="100">Body Contouring</li>
                            <li data-aos-delay="200">Brazilian Butt Lift</li>
                            <li data-aos-delay="300">Liposuction</li>
                            <li data-aos-delay="400">Mommy Makeover</li>
                            <li data-aos-delay="500">Tummy Tuck</li>
                            <li data-aos-delay="600">Vaginal Rejuvenation</li>
                        </List>
                    </div>
                </div>                

                <div className="flexy-item" ref={useOutsideClick()} onClick={handleInsideClick} data-aos="fade-in">
                    <img className="flexy-item-bg" src="./flexy2.jpeg" alt="flexy"/>
                    <h1 className="flexy-item-title">Face</h1>
                    <div className="flexy-item-options">
                        <List type="unstyled" className="m-0">
                            <li data-aos-delay="0">Rhinoplasty</li>
                            <li data-aos-delay="100">Blepharoplasty</li>
                            <li data-aos-delay="200">Facelift</li>
                            <li data-aos-delay="300">Browlift</li>
                            <li data-aos-delay="400">Necklift</li>
                            <li data-aos-delay="500">Tummy Tuck</li>
                            <li data-aos-delay="600">Chin Augmentation</li>
                        </List>
                    </div>
                </div>

                <div className="flexy-item" ref={useOutsideClick()} onClick={handleInsideClick} data-aos="fade-in">
                    <img className="flexy-item-bg" src="./flexy3.jpeg" alt="flexy"/>
                    <h1 className="flexy-item-title">Fillers</h1>
                    <div className="flexy-item-options">
                        <List type="unstyled" className="m-0">
                            <li data-aos-delay="0">Botox</li>
                            <li data-aos-delay="100">Injectables & Fillers</li>
                            <li data-aos-delay="200">Microdermabrasion</li>
                            <li data-aos-delay="300">Chemical Peels</li>
                            <li data-aos-delay="400">Skin Care</li>
                            <li data-aos-delay="500">Lip Augmentation</li>
                            <li data-aos-delay="600">Skin Tightening</li>
                        </List>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Procedure;