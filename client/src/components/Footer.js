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
                    (404) 882-8043
                </p>
            </div>
            <div>
                <p>© 2023 Dr. Nicholas Jones &nbsp;&nbsp;|&nbsp;&nbsp;
                    All Rights Reserved &nbsp;&nbsp;|&nbsp;&nbsp;
                    Privacy Policy
                </p>
            </div>
        </footer>
    );
}

export default Footer;