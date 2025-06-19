import "./contact.scss";
import React from "react";

export default function Contact() {

    return (
        <div className="contact" id="contact">
            <div className="contact__header">
                <h3>CONTACT</h3>
            </div>
            <div className="contact__content">
                <p>We are here to help you with all your small engine repair needs. Whether you have questions, need a quote, or want to schedule a service, feel free to reach out to us.</p>
                <p>Call us at <a className="link" href="tel:8654078914">865-407-8914</a> or email us at <a className="link" href="mailto:ben@mowermastersllc.com">ben@mowermastersllc.com</a></p>
            </div>
        </div>
    )
}