'use client'

import "./header.scss";
import React from "react";

export default function Header() {

    return (
        <div className="header" id="home">
            <div className="header__text">
                <h2>Mower Masters</h2>
                <h5>SMALL ENGINE REPAIR MADE EASY</h5>
                <span>We service all types of small engines and we come to your HOME or BUSINESS! No more shoving your mower, lawn tractor, or snow blower into the trunk. Just give us a call and we will come to you!</span>
                <button><a href="tel:8654078914">Call Now 865-407-8914</a></button>
            </div>
            <div className="header__image-wrapper">
                <img src="/mower-image.png"
                    alt=""
                    className="header__image"
                   />
            </div>
        </div>
    )
}