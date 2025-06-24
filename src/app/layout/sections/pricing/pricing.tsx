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
                { type: "Repair", price: "$119 or $129*", note: "cost of parts is additional" },
                { type: "Tune-up & repair", price: "$159 or $169", note: "depending on location" }
            ]
        },
        {
            category: "Lawn Tractors",
            image: "/service-tractor.png",
            rates: [
                { type: "Tune-up", price: "$209-$269** or $219*-$279**", note: "outside normal service area" },
                { type: "Repair", price: "$209-$269** or $219*-$279**", note: "outside normal service area, cost of parts is additional" },
                { type: "Tune-up & repair", price: "add $60 to base price above" }
            ]
        },
        {
            category: "Tillers, Snow Blowers, Pressure Washers & Generators",
            image: "/service-snowblower.png",
            rates: [
                { type: "Tune-up", price: "$170 or $180*" },
                { type: "Repair", price: "$170 or $180*" },
                { type: "Tune-up & repair", price: "add $40 to base price above" }
            ]
        }
    ]

    return (
        <div className="pricing" id="pricing">
            <div className="pricing__header">
                <h2>PRICING</h2>
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