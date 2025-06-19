import "./about.scss";
import React from "react";

export default function About() {

    return (
        <div className="about" id="about">
            <div className="about__header">
                <h3>ABOUT</h3>
            </div>
            <div className="about__content">
                <div className="about__text">
                    <p>
                        Mower Masters is a small engine repair service that specializes in providing convenient, on-site repairs for lawn mowers, lawn tractors, and snow blowers. We understand the hassle of transporting your equipment to a repair shop, which is why we come to you, whether at home or your business.
                    </p>
                    <p>
                        Our team of experienced technicians is dedicated to delivering high-quality service with a focus on customer satisfaction. We pride ourselves on our expertise in small engine repair and our commitment to making the process as easy as possible for you.
                    </p>
                </div>
                <div className="about__founder">
                    <h5>Meet the Founder</h5>
                    <div className="about__founder__content">
                        <img src="/mower-image.png" alt="" />
                        <div className="about__founder__text">
                            <span>Hi, I’m Ben Brannock, the owner and technician behind Mower Masters. With over 18 years of hands-on experience repairing lawn equipment, small engines, and power tools, I started this business because I saw how frustrating it was for homeowners and small business owners to get quality service—especially during peak mowing season.</span>
                            <span>What started as a side project in my garage turned into a full-time passion. I’ve always believed in honest work, fair pricing, and treating every machine like it was my own. Now, I’m offering my service that’s local, mobile, and built on trust.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}