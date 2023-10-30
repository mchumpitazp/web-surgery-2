import React from "react";

function Hero () {
    const heroSliderRef = React.useRef(null);
    React.useEffect(() => {
        let i = 0;
        const maxSlides = heroSliderRef.current.childNodes.length - 1;        
        const sliderAnimation = () => {
            heroSliderRef.current.children[i].className = 'slide active';     
            setTimeout(() => {
                heroSliderRef.current.children[i].className = 'slide';
                i = (i === maxSlides) ? 0 : i + 1;    
            }, 5000);
        };
        sliderAnimation(0);        
        setInterval(() => { sliderAnimation(); }, 6000);        
    }, []);

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
            <section id="hero">            
                <div id="hero-main" className="vh-100 d-flex justify-content-center align-items-center">
                    <div id="hero-slider" ref={heroSliderRef} className="d-flex justify-content-center align-items-center text-center">                        
                        <h2 className="slide">Atlanta's Premium Plastic Surgeon</h2>
                        <h2 className="slide">A More Beautiful & Confident You</h2>
                        <h2 className="slide">Uncompromising Care</h2>
                        <h2 className="slide">With a Focus on You</h2>
                    </div>

                    <div id="hero-brands">
                        <HeroBrands />
                    </div>
                </div>
            </section>

            <section id="hero-bottom" className="d-flex justify-content-center text-center">
                <p>We offer post-operative and lymphatic massages</p>
            </section>
        </>
    );
}

export default Hero;