import React from "react";
import logo from "../assets/logo/spotify-logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Logo do Spotify"/>
            </Link>
            <Link className="header_link" to="/">
                <h1>Spotify</h1>
            </Link>
        </div>
    )
}

export default Header;