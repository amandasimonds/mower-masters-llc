'use client'

import "./header.scss";
import React from "react";

export default function Header() {

    return (
        <div className="header" id="home">
            <img src="/mower-masters-logo.png" className="header__image" alt="mower masters small engine repair knoxville tennessee" />
            <div className="header__text">
                <h1 className="visually-hidden">Mower Masters small engine repair in Knoxville Tennessee
                </h1>
                <span>We are a mobile service that works with all types of small engines. We will come to your HOME or BUSINESS! No more shoving your mower, lawn tractor, or snow blower into the trunk. Just give us a call and we will come to you!</span>
                <button><a href="tel:8654078914">Call Now 865-407-8914</a></button>
            </div>
        </div>
    )
}