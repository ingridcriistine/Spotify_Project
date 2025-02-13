import React from "react";
import { Link } from "react-router-dom";

const SongItem = () => {
    return (
        <Link to="/song/1" className="song-item">
            <div className="song-item__number-album">
                <p>1</p>
                <div className="song-item__album">
                    <img src="" alt="Imagem da música X" className="song-item__image"/>
                    <p className="song-item__name">Nome música</p>
                </div>
            </div>
            <p className="song-item__name">02:20</p>
        </Link>
    )
}

export default SongItem;