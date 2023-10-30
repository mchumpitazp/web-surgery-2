import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Header () {
    const [headerAnimated, setHeaderAnimated] = React.useState(false);
    const headerRef = React.useRef(null);

    React.useEffect(() => {        
        const handleScroll = (e) => {
            if (e.target.documentElement.scrollTop >= headerRef.current.clientHeight) {
                if (!headerAnimated) {
                    setHeaderAnimated(true);
                    headerRef.current.classList.add('white-background')
                } 
            } else {
                if (headerAnimated) {
                    setHeaderAnimated(false);
                    headerRef.current.classList.remove('white-background')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [headerAnimated]);

    return (
        <header ref={headerRef}>
            <Navbar sticky="top" className="p-0 m-0">
                <NavbarBrand className="p-0 m-0">
                    <img src="./logo.svg" alt="logo" className="img-fluid h-100"/>
                </NavbarBrand>
            </Navbar>
        </header>
        
    )
}

export default Header;