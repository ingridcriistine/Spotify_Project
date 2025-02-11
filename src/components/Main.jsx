import React from "react";
import FontAwesomeIcon from "@fontawesome/react-fontawesome"
import faCirclePlay from "@fontawesome/free-solid-svg-icons"

const Main = () => {
    return (
        <div className="main ">
            <div className="item-list">
                <div className="item-list__header">

                </div>

                <div className="single-item">
                    <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do artista X"/>
                    
                </div>
                
                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay}/>
            </div>
            <div className="single-item__texts">
                <p className="single-item__title">Henrique e Juliano</p>
                <p className="single-item__type">Artista</p>
            </div>
        </div>
    )
}

export default Main;