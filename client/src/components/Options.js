import React from "react";
import { Button } from "reactstrap";

function Options() {
    const data = [
        {
            title: 'Breast Lift in Atlanta',
            description: 'The clinical term for a breast lift is mastopexy. A mastopexy involves removing excess skin and breast tissue to correct ptosis, or sagging breasts, as well as improve your breast contour and restore your nipple position. The breasts will have a more aesthetically pleasing shape and youthful appearance. A Breast Lift may be combined with other cosmetic procedures such as tummy tucks, breast augmentations (augmentation mastopexy), arm lifts, etc.'
        },
        {
            title: 'Abdominoplasty',
            description: 'The clinical term for a breast lift is mastopexy. A mastopexy involves removing excess skin and breast tissue to correct ptosis, or sagging breasts, as well as improve your breast contour and restore your nipple position. The breasts will have a more aesthetically pleasing shape and youthful appearance. A Breast Lift may be combined with other cosmetic procedures such as tummy tucks, breast augmentations (augmentation mastopexy), arm lifts, etc.'
        },
        {
            title: 'Brazilian Butt Lift',
            description: 'Brazilian Butt Lift (BBL or BBT – Brazilian Butt transfer) has been popularized in today’s society by the likes of many celebrities both within the states and abroad. It is a plastic surgery procedure in which fat is transferred to the buttocks and hip area to increase the projection of the buttocks and can also be used to widen the hips.'
        }
    ]

    const OptionsItems = () => data.map((o, i) => {
        return (
            <div className="options-item" key={i}>
                <h2>{o.title}</h2>
                <p>{o.description}</p>
                <Button className="btn-base">
                    {o.title}
                    &nbsp;
                    <img src="./arrow-right.svg" alt="arrow-right" className="arrow-right-white"/>
                </Button>
            </div>
        );
    })

    return(
        <section id="options">
            <OptionsItems />
        </section>
    );
}

export default Options;