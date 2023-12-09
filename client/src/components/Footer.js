function Footer () {
    return(
        <footer className="d-flex flex-column justify-content-between align-items-center gap-4">
            <div className="d-flex gap-4">
                <img height={25} src="./facebook.svg" alt="facebook"/>
                <img height={25} src="./twitter.svg" alt="twitter"/>
                <img height={25} src="./instagram.svg" alt="instagram"/>
                <img height={25} src="./youtube.svg" alt="youtube"/>
            </div>

            <div className="text-center">
                <p>
                    Monday - Thursday: 8:30am - 5:00pm 
                    <br/>
                    Friday 8:30am - 12pm 
                    <br/>
                    (954) 463-5208
                </p>
            </div>
            <div className="text-center">
                <p>© 2023 Dr. Yates and Dr. Zahedi &nbsp;&nbsp;|&nbsp;&nbsp;
                    All Rights Reserved &nbsp;&nbsp;|&nbsp;&nbsp;
                    Privacy Policy
                </p>
            </div>
        </footer>
    );
}

export default Footer;