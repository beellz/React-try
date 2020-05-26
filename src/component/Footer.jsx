import React from "react"


function Footer() {
    
    let FYear = new Date().getFullYear();
    

    return (
        <footer>
            <p> Copyright ⓒ {FYear} </p>
        </footer>
    );
}

export default Footer;