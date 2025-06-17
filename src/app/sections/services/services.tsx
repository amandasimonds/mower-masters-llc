import "./services.scss";
import React from "react";

export default function Services() {

    return (
        <div className="services">
            <div className="services__header">
                <h3>SERVICES</h3>
            </div>
            <div className="services__content">
                <div className="services__content__intro">
                    <div className="section">
                        <h4>Locations Serviced</h4>
                        <span className="divider"></span>
                        <span className="section__details">Knoxville, Farragut, North Knoxville, South Knoxville, Sevierville</span>
                    </div>
                    <div className="section"><h4>Maintenance</h4>
                        <span className="divider"></span>
                        <span className="section__details">Maintenance is something you should do annually regardless of how your machine is running. This will ensure proper performance throughout the season.</span>
                    </div>
                    <div className="section"><h4>Repair</h4>
                        <span className="divider"></span>
                        <span className="section__details">If your machine is not performing or running properly then it probably needs some type of repair.</span>
                    </div>
                </div>
                <div className="services__content__items">
                    <div className="item"></div>
                </div>
            </div>
        </div>
    )
}