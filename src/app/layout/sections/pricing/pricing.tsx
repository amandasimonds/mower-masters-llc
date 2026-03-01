import "./pricing.scss";
import React from "react";

export default function Pricing() {

    type ServiceCategory = {
        category: string;
        image: string;
        notes?: string;
        rates: ServiceRate[];
    };

    type ServiceRate = {
        type: string;
        price: string;
        note?: string;
    };

    const services: ServiceCategory[] = [
        {
            category: "Push Mowers",
            notes: "Zero-Turns are priced with Tractors",
            image: "/service-lawnmower.png",
            rates: [
                { type: "Tune-up", price: "$119 or $129*" },
                { type: "Repair", price: "$90 per hour", note: "depending on location" },
                { type: "Tune-up & repair", price: "Discount $60 for first hour of repair", note: "depending on location" }
            ]
        },
        {
            category: "Lawn Tractors",
            image: "/service-tractor.png",
            rates: [
                { type: "Tune-up", price: "$209-$269** or $219*-$279**", note: "outside normal service area" },
                { type: "Repair", price: "$90 per hour", note: "depending on location" },
                { type: "Tune-up & repair", price: "Discount $60 for first hour of repair" }
            ]
        },
        {
            category: "Tillers, Snow Blowers, Pressure Washers & Generators",
            image: "/service-snowblower.png",
            rates: [
                { type: "Tune-up", price: "$170 or $180*" },
                { type: "Repair", price: "$90 per hour", note: "depending on location" },
                { type: "Tune-up & repair", price: "Discount $60 for first hour of repair" }
            ]
        }
    ]

    return (
        <div className="pricing" id="pricing">
            <div className="pricing__header">
                <h2>PRICING</h2>
            </div>
            <div className="pricing__diagnose-hourly">
                <div className="section">
                    <h5>Diagnose & Estimate: $90 - $130</h5>
                    <p>We inspect your equipment to determine if it can be fixed and what the estimated cost would be. The diagnosis fee applies regardless of outcome (whether or not you proceed with repairs, or if repairs are not cost-effective).</p>
                </div>
                <div className="section">
                    <h5>Labor: $90/hour</h5>
                    <p>Labor is charged for time spent completing repairs and equipment overhauls.</p>
                </div>
            </div>
            <div className="pricing__content">
                <div className="pricing__content__items">
                    {services.map((item: ServiceCategory, idx: number) => (
                        <div className="pricing-item" key={item.category || idx}>
                            <div className="pricing-item__type">
                                <h5>{item.category}</h5>
                                <img src={item.image} alt={item.category} />
                            </div>
                            <div className="pricing-item__details">
                                {item.rates && (
                                    <div className="pricing-item__description">
                                        <ul>
                                            {item.rates.map((rate: ServiceRate, i: number) => (
                                                <li key={rate.type || i} className="rate">
                                                    <span className="rate-type">{rate.type}:</span>
                                                    <span className="rate-price">{rate.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {item.notes && (
                                    <div className="pricing-item__notes">
                                        <span className="note">{item.notes}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pricing__content__notes">
                    <span>* Outside of normal service area</span>
                    <span>** applies to 3-blade tractor and Zero-turn tractors</span>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}