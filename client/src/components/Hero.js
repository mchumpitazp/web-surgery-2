import React from "react";
import $ from 'jquery';

function Hero () {
    React.useEffect(() => {
        let i = 0;
        $('#hero-bg-slider').children().eq(i).addClass('active');
        function AnimateOut() {
            $('#hero-bg-slider').children().eq(i).removeClass('active');
            setTimeout(AnimateIn, 100);
        }
        function AnimateIn() {
            if (++i >= $('#hero-bg-slider').children().length) {
                i = 0;
            }
            $('#hero-bg-slider').children().eq(i).addClass('active');
            setTimeout(AnimateOut, 5900);
        }
        setTimeout(AnimateOut, 5900);
    }, []);

    React.useEffect(() => {
        let i = 0;
        setTimeout(() => {
            $('#hero-title-slider').children().eq(i).addClass('active');
        }, 500);
        
        function fadeOut() {
            $('#hero-title-slider').children().eq(i).removeClass('active');
            setTimeout(fadeIn, 1000);
        }
        function fadeIn() {
            if (++i >= $('#hero-title-slider').children().length) {
                i = 0;
            }
            $('#hero-title-slider').children().eq(i).addClass('active');
            setTimeout(fadeOut, 5000);
        }
        setTimeout(fadeOut, 5000);
    },[]);

    const HeroBrands = () => {
        const brands = ['BRAND', 'BRAND', 'BRAND', 'BRAND'];
        let delay = 0;

        return brands.map((b, i) => {
            delay += 300;
            return (
                <img src={`./${b}`} alt={b} key={b+i}
                    data-aos="fade-in" data-aos-delay={delay} 
                    data-aos-duration={1000} data-aos-offset={-500}/>
            );            
        });
    }

    return (
        <>        
            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div id="hero-bg-slider">
                    <img className="bg-slide" src="./bg_hero_1.jpeg" alt="bg_hero_1"/>
                    <img className="bg-slide" src="./bg_hero_2.jpeg" alt="bg_hero_2"/>
                    <img className="bg-slide" src="./bg_hero_3.jpeg" alt="bg_hero_3"/>
                    <img className="bg-slide" src="./bg_hero_4.jpeg" alt="bg_hero_4"/>
                    <img className="bg-slide" src="./bg_hero_5.jpeg" alt="bg_hero_5"/>
                </div>

                <div id="hero-title-slider" className="d-flex justify-content-center align-items-center text-center">                        
                    <h2 className="title-slide">Atlanta's Premium Plastic Surgeon</h2>
                    <h2 className="title-slide">Unrivaled Results</h2>
                    <h2 className="title-slide">A More Beautiful & Confident You</h2>
                    <h2 className="title-slide">Uncompromising Care</h2>
                    <h2 className="title-slide">With a Focus on You</h2>
                </div>

                <div id="hero-brands">
                    <HeroBrands />
                </div>
            </section>

            <section id="hero-bottom" className="d-flex justify-content-center text-center">
                <p>We offer post-operative and lymphatic massages</p>
            </section>
        </>
    );
}

export default Hero;