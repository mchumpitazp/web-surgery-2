import { Navbar, NavbarBrand } from "reactstrap";

function Header () {
    return (
        <section id="header">
            <Navbar sticky="top">
                <NavbarBrand>BRAND</NavbarBrand>
            </Navbar>
        </section>
        
    )
}

export default Header;