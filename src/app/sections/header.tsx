'use client'

import "./header.scss";
import React from "react";
import Button from "../shared/components/button";
import Image from "next/image";

export default function Header() {

    const [clicks, setClicks] = React.useState(0);

    function callNow() {
        console.log('hello');
        setClicks(clicks + 1)
    }

    return (
        <div className="header">
            <div className="header__text">
                <h2>Small Engine Repair</h2>
                <span className="subtitle">Made Easy</span>
                <span>We service all types of small engines and we come to your HOME or BUSINESS! No more lifting and shoving your mower, lawn tractor, or snow blower into the trunk. Just give us a call and we will come to you!</span>
                <button onClick={callNow}>Call Now <a href="">865-222-2222</a>({clicks})</button>
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