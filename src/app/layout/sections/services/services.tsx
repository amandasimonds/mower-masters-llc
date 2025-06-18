import "./services.scss";
import React from "react";

export default function Services() {

    type ServiceItem = {
        name: string;
        image: string;
        services: string[];
    };

    const serviceItems: ServiceItem[] = [
        {
            name: "Lawn Mowers",
            image: "/service-lawnmower.png",
            services: [
                "Inspect and replace spark plug(s)",
                "Oil change & lube",
                "Treat fuel/winterize",
                "Sharpen/balance blades",
                "Clean/replace air filter",
                "Check engine & gaskets for leaks, cracks, signs of overheating",
                "Blow off dirt/debris with compressed air",
                "Operational check & adjustment",
                "Belts & cables checked & tightened; if replaced (parts and labor, extra)",
                "Inflate tires (Does not include repairing leaks or tubes)"
            ]
        },
        {
            name: "Lawn Tractors",
            image: "/service-tractor.png",
            services: [
                "Inspect and replace spark plug(s)",
                "Oil change & lube",
                "Treat fuel/winterize",
                "Blow off dirt/debris with compressed air",
                "Operational check & adjustments",
                "Check Belts, Cables, Pulleys and linkages – recommend any needed work, adjustments, or replacements",
                "Inflate tires to proper PSI – if applicable. (Does not include repairing leaks or tubes)"
            ]
        },
        {
            name: "Snow Blowers",
            image: "/service-snowblower.png",
            services: [
                "Inspect and replace spark plug(s)",
                "Check engine & gaskets for leaks, cracks, signs of overheating",
                "Check engine RPM’s – Adjust carburetor idle speed if necessary/applicable",
                "Lubricate linkage components",
                "Test and check charging system – output Readings: low & high",
                "Oil change",
                "Treat fuel/winterize",
                "Clean/replace air filter",
                "Blow off dirt/debris with compressed air",
                "Electrical systems check & adjustments",
                "Check battery/cables (if applicable)",
                "Inflate tires to proper PSI – if applicable. (Does not include repairing leaks or tubes)"
            ]
        }
    ]

    return (
        <div className="services" id="services">
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
                    {serviceItems.map((item: ServiceItem, idx: number) => (
                        <div className="service-item" key={item.name || idx}>
                            <div className="service-item__type">
                                <h5>{item.name}</h5>
                                <img src={item.image} alt={item.name} />
                            </div>
                            {item.services && (
                                <div className="service-item__description">
                                    <ul>
                                        {item.services.map((service: string, i: number) => (
                                            <li key={service + i}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}