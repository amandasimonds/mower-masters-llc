import "./about.scss";
import React from "react";

export default function About() {

    return (
        <div className="about" id="about">
            <div className="about__header">
                <h2>ABOUT</h2>
            </div>
            <div className="about__content">
                <div className="about__text">
                    <p>
                        We are a small engine repair service based in Knoxville, TN, providing convenient, on-site repairs for lawn mowers, lawn tractors, and snow blowers. We understand the hassle of transporting your equipment to a repair shop, which is why we come to you, whether at home or your business.
                    </p>
                </div>
                <div className="about__founder">
                    <h5>Meet the Founder</h5>
                    <div className="about__founder__content">
                        <img src="/mobile-service-technician-ben.png" alt="mobile small engine repair service technician knoxville tn" />
                        <div className="about__founder__text">
                            <span>Hi, I’m Ben Brannock, the owner and technician behind Mower Masters. With 18 years of automotive & mechanical experience, I set out to start a business dedicated to providing reliable, high-quality service for lawn and power equipment.</span>
                            <span> What started as a side project in my garage turned into a full-time job. I’ve always believed in honest work, fair pricing, and treating every machine like it was my own. Now, I’m offering my service that’s local, mobile, and built on trust.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}