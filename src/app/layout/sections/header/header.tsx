'use client'

import "./header.scss";
import React from "react";

export default function Header() {

    return (
        <div className="header" id="home">
            <div className="header__text">
                <h1>Mower Masters
                    <span className="header-subtitle">SMALL ENGINE REPAIR in</span>
                    <span className="header-subtitle">KNOXVILLE TN</span>
                </h1>
                <span>We service all types of small engines and we come to your HOME or BUSINESS! No more shoving your mower, lawn tractor, or snow blower into the trunk. Just give us a call and we will come to you!</span>
                <button><a href="tel:8654078914">Call Now 865-407-8914</a></button>
            </div>
            <div className="header__image-wrapper">
                <img src="/mower-image.png"
                    alt="small engine repair lawn mower service knoxville tn"
                    className="header__image"
                />
            </div>
        </div>
    )
}