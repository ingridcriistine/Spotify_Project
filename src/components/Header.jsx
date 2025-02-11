import React from "react";
import logo from "../assets/logo/spotify-logo.png"

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo do Spotify"/>
            <a className="header_link" href="/">
                <h1>Spotify</h1>
            </a>
        </div>
    )
}

export default Header;