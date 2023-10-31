import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavItem } from "reactstrap";

function Header () {
    const [headerAnimated, setHeaderAnimated] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const headerRef = React.useRef(null);

    React.useEffect(() => {        
        const handleScroll = (e) => {
            if (e.target.documentElement.scrollTop >= headerRef.current.clientHeight) {
                if (!headerAnimated) {
                    setHeaderAnimated(true);
                    headerRef.current.classList.add('white-background');
                } 
            } else {
                if (headerAnimated) {
                    setHeaderAnimated(false);
                    headerRef.current.classList.remove('white-background');
                }
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [headerAnimated]);

    return (
        <header ref={headerRef}>
            <Navbar sticky="top" className="p-0 m-0">
                <NavbarBrand className="p-0 m-0">
                    <img src="./logo.svg" alt="logo" className="img-fluid h-100"/>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>

                    <span className="menu">Menu</span>
                    <div className="btn-close-container">
                        <button onClick={toggle} type="button" className="btn-close navbar-toggler" aria-label="Close"></button>
                    </div>

                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink href="/">
                                Consultation
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                (404) 882-8043
                            </NavLink>
                        </NavItem>
                        <hr/>
                        <NavItem>
                            <NavLink href="/">
                                Body
                                &nbsp;
                                <img src="./arrow-right.svg" alt="arrow-right"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Breast
                                &nbsp;
                                <img src="./arrow-right.svg" alt="arrow-right"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Face
                                &nbsp;
                                <img src="./arrow-right.svg" alt="arrow-right"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Non-Surgical
                                &nbsp;
                                <img src="./arrow-right.svg" alt="arrow-right"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Meet Dr. Jones
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Community Outsearch
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Press
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Videos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Post Op Care
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
        
    )
}

export default Header;