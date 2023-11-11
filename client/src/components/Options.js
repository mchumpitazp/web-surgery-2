import React from "react";
import $ from 'jquery';
import { Button, Row, Col } from "reactstrap";

function Options() {
    const data = React.useMemo(() => [
        {
            title: 'Breast Lift in Atlanta',
            description: 'The clinical term for a breast lift is mastopexy. A mastopexy involves removing excess skin and breast tissue to correct ptosis, or sagging breasts, as well as improve your breast contour and restore your nipple position. The breasts will have a more aesthetically pleasing shape and youthful appearance. A Breast Lift may be combined with other cosmetic procedures such as tummy tucks, breast augmentations (augmentation mastopexy), arm lifts, etc.'
        },
        {
            title: 'Abdominoplasty',
            description: 'Our abdominal area is particularly prone to gaining and holding fat cells. When it does, it grows in size, causing the skin to stretch with it. Sometimes this stretching causes the skin to extend beyond its usual furthest point, and when this happens, it can make it virtually impossible for it to return to being tight and firm again.'
        },
        {
            title: 'Brazilian Butt Lift',
            description: 'Brazilian Butt Lift (BBL or BBT – Brazilian Butt transfer) has been popularized in today’s society by the likes of many celebrities both within the states and abroad. It is a plastic surgery procedure in which fat is transferred to the buttocks and hip area to increase the projection of the buttocks and can also be used to widen the hips.'
        },
        {
            title: 'Liposuction',
            description: 'Are you happy with your weight, but you feel that your body looks looser and flabbier than you would like? Is your shape stopping you from wearing the clothes that you would like to? Liposuction is a very common form of cosmetic surgery that is designed to permanently remove stubborn fat cells from areas of the body that the patient most dislikes.'
        },
        {
            title: 'Male Breast Reduction',
            description: 'For many men and adolescent boys, having unusually enlarged breasts prevents them from enjoying life to the fullest, due to the embarrassment of going shirtless, which may hold them back from enjoying certain outdoor sports or activities like swimming or water sports.'
        },
        {
            title: 'Breast Augmentation',
            description: 'Breast augmentation surgery involves making an incision and placing implants underneath the breast tissue or muscle. The procedure can be combined with other types of surgery, including lifts and mommy makeovers. Some people can achieve a breast lift with augmentation alone. Others may need to undergo a lift with implants.'
        },
        {
            title: 'Breast Reduction Surgery',
            description: 'Breast reduction also called breast reduction mammoplasty is a surgical procedure done to remove breast tissue and skin to relieve the symptoms associated with large breasts (macromastia) and improve the shape and size of the breasts.'
        },
        {
            title: 'Facial Fillers And Botox',
            description: 'If you have any interest in fighting back against aging skin, it is almost impossible that you have not heard about facial fillers and Botox. However, understanding the similarities and differences between them is often a very different story. We want to make sure that our patients understand the information about our products so that they can help to make the best decisions about their treatment options.'
        }
    ], []);
     
    const [item, setItem]  = React.useState({
        title: '',
        description: ''
    });

    React.useEffect(() => {
        const initTitle = data[0]['title'];
        const initDescription = data[0]['description'];
        setItem({
            title: initTitle,
            description: initDescription
        });
        $('#options-menu-items .options-item:first').addClass('active');
    }, [data]);

    React.useEffect(() => {
        $('#options-menu-display').fadeIn(200);
    }, [item]);

    const handleClick = (e) => {          
        if (window.innerWidth > 992) {
            const item = $(e.target).closest('.options-item');        
            const title = $(item).find('.options-item-title').text();
            const description = $(item).find('.options-item-description').text();
            $('.options-item').removeClass('active');
            $(item).addClass('active');
            
            $('#options-menu-display').fadeOut(200, function() {
                setItem({
                    title: title,
                    description: description
                });
            });
        }
    }

    const optionsItems = data.map((o, i) => {
        return (
            <div key={i} className='options-item' onClick={handleClick}>
                <h2 className="options-item-title">{o.title}</h2>
                <div className="options-item-info">
                    <p className="options-item-description">{o.description}</p>
                    <Button className="btn-base">
                        {o.title}
                        &nbsp;
                        <img src="./arrow-right.svg" alt="arrow-right" className="arrow-right-white"/>
                    </Button>
                </div>                
            </div>
        );
    });        

    return (
        <>
            <section id="options-list" className="ph50 d-block d-lg-none">
                {optionsItems}
            </section>

            <section id="options-menu" className="ph50 d-none d-lg-block">
                <Row className="m-0 p-0">
                    <Col lg={7}>
                        <div id="options-menu-display">
                            <h2 className="display-title">{item.title}</h2>
                            <p className="display-description">{item.description}</p>
                            <Button className="btn-base">
                                {item.title}
                                &nbsp;
                                <img src="./arrow-right.svg" alt="arrow-right" className="arrow-right-white"/>
                            </Button>
                        </div>                                             
                    </Col>
                    <Col lg={4} className="offset-1 p-0 bg-black">
                        <div id="options-menu-items" className="text-white">
                            {optionsItems}
                        </div>
                    </Col>
                </Row>
            </section>

            <div id="options-after" className="mb100"></div>
        </>
    );
}

export default Options;