import React from "react";
import $ from 'jquery';
import { Col, List, Row } from "reactstrap";

function Procedure () {
    // temp data
    const data = [
        {
            title: 'Body',
            background_url: './flexy1.jpeg',
            procedures: ['Arm Lift', 'Body Contouring', 'Brazilian Butt Lift', 'Liposuction', 'Mommy Makeover', 'Tummy Tuck', 'Vaginal Rejuvenation']
        },
        {
            title: 'Face',
            background_url: './flexy2.jpeg',
            procedures: ['Rhinoplasty', 'Blepharoplasty', 'Facelift', 'Necklift', 'Tummy Tuck', 'Chin Augmentation']
        },
        {
            title: 'Fillers',
            background_url: './flexy3.jpeg',
            procedures: ['Botox', 'Injectables & Fillers', 'Microdermabrasion', 'Chemical Peels', 'Skin Care', 'Lip Augmentation', 'Skin Tightening']
        },
        {
            title: 'Breast',
            background_url: './flexy4.jpeg',
            procedures: ['Breast Augmentation', 'Breast Lift', 'Breast Reconstruction', 'Breast Reduction', 'Male Breast Reduction', 'Nipple Reconstruction']
        }    
    ]

    React.useEffect(() => {
        $('.flexy-item-options li').attr('data-aos', 'fade-up');
        $('.flexy-item-options li').attr('data-aos-duration', '400');
    }, []);

   /*  const useOutsideClick = () => {
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
    } */

    const handleMouseEnter = (e) => {
        if (!$(e.target).hasClass('transition')) {
            $(e.target).find('li').removeClass('aos-animate').delay(200).queue(function() {
                $(this).addClass('aos-animate').dequeue();
            });
            $(e.target).addClass('transition');
            $(e.target).find('.flexy-item-options').fadeIn(400).css('display', 'flex');
        }
    }
    const handleMouseLeave = (e) => {
        $(e.target).removeClass('transition');
        $(e.target).find('.flexy-item-options').fadeOut(400);
    }

    const FlexyItems = () => {
        const FlexyList = ({ procedures }) => {
            let delay = -100;
            return procedures.map((p, i) => {
                delay += 100;
                return (<li data-aos-delay={delay} key={i}>{p}</li>)
            }); 
        }

        return data.map((f, i) => {    
            return (
                <Col className="p-0" key={i}>
                    <div className="flexy-item" data-aos="fade-in"
                        //onClick={handleInsideClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <img className="flexy-item-bg" src={f.background_url} alt={f.background_url}/>
                        <h1 className="flexy-item-title">{f.title}</h1>
                        <div className="flexy-item-options">
                            <List type="unstyled" className="m-0">
                                <FlexyList procedures={f.procedures}/>
                            </List>
                        </div>
                    </div>
                </Col>
                
            )
        });
    }

    return (
        <section id="procedure">
            <div className="ph50 mb50">
                <div id="procedure-text" className="d-flex flex-column gap-2 text-center" data-aos="fade-in">
                    <h2>Find your Procedure</h2>
                    <span>Aesthetic Procedures & Non-Surgical Enhancement In Atlanta</span>
                </div>
            </div>            

            <Row id="procedure-flexy" xs={1} lg={2}>
                <FlexyItems />
            </Row>
        </section>
    );
}

export default Procedure;