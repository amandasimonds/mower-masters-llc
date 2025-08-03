import "./reviews.scss";
import React from "react";

type Review = {
  id: number;
  reviewer: string;
  text: string;
};

const reviews: Review[] = [
    { id: 1, reviewer: 'Cynthia', text: "Ben was easy to contact and showed up right on time. He tuned up my mower and it starts so much more easily now and is mowing great. I will definitely call him again in the future." },
    { id: 2, reviewer: 'Terry', text: "Immediate response when I left a message for need of repair on mower and power washer. Diagnosed and made both engines working again. Went above and beyond by sharing tips to keep engines running properly and lasting longer." },
    { id: 3, reviewer: 'Susan', text: "Our riding mower was in bad shape. Ben came out and diagnosed and fixed the problem at a reasonable rate. It runs and looks like new. Thank you Ben. I would highly reccomend him to anyone with riding mower issues." },
];

export default function Reviews() {

    return (
        <div className="reviews" id="reviews">
            <div className="reviews__header">
                <h2>REVIEWS</h2>
            </div>
            <span className="icon-link">
                <i className="material-icons">reviews</i>
                <a className="link" href="https://search.google.com/local/writereview?placeid=ChIJs4-LmyjwJmARmvm9QqU0JHA">Leave a review on Google</a>
            </span>
            <div className="reviews__content">
                {reviews.map((review) => (
                    <div className="review-item" key={review.id}>
                        <span className="review-item__text">
                            &quot;{review.text}&quot;
                        </span>
                        <span className="review-item__reviewer">&mdash;{review.reviewer}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}