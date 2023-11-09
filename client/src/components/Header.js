import React from "react";
import $ from 'jquery';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavItem } from "reactstrap";

function Header () {
    const data = [ { title: 'Consultation', url: '/', withArrow: false }, { title: '(404) 882-8043', url: '/', withArrow: false }, { title: 'Body', url: '/', withArrow: true }, { title: 'Breast', url: '/', withArrow: true }, { title: 'Face', url: '/', withArrow: true }, { title: 'Non-Surgical', url: '/', withArrow: true }, { title: 'Meet Dr. Jones', url: '/', withArrow: false }, { title: 'Community Outsearch', url: '/', withArrow: false }, { title: 'Gallery', url: '/', withArrow: false }, { title: 'Press', url: '/', withArrow: false }, { title: 'Videos', url: '/', withArrow: false }];

    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= $('header').height()) {
                $('header').addClass('white-background');
            } else {
                $('header').removeClass('white-background');
            }
        });
        return () => $(window).off('scroll');
    }, []);

    const toggle = () => {
        setIsOpen(!isOpen);
        $('header').delay(300).queue(function() {
            $('header').toggleClass('menu-white-background').dequeue();
        })
    };   

    const NavItems = () => data.map((n, i) => {
        return (            
            <NavItem key={i}>
                { i === 2 && <hr/> }
                <NavLink href={n.url}>
                    {n.title}
                    { n.withArrow && <img className="ps-2" src="./arrow-right.svg" alt="arrow-right"/> }
                </NavLink>
            </NavItem>
        );
    });

    return (
        <header className="ph50">
            <Navbar sticky="top" className="p-0 m-0">
                <div className="navbar-social-media d-none d-lg-flex gap-4">
                    <img height={22} src="./facebook.svg" alt="facebook"/>
                    <img height={22} src="./twitter.svg" alt="twitter"/>
                    <img height={22} src="./instagram.svg" alt="instagram"/>
                    <img height={22} src="./youtube.svg" alt="youtube"/>
                </div>

                <NavbarBrand href="/" className="p-0 m-0 m-lg-auto">
                    <img src="./logo.svg" alt="logo" className="img-fluid h-100"/>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <span className="menu">Menu</span>

                    <div className="btn-close-container">
                        <button onClick={toggle} type="button" className="btn-close navbar-toggler" aria-label="Close"></button>
                    </div>

                    <Nav className="ms-auto" navbar>
                        <NavItems />
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
        
    )
}

export default Header;