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
    { id: 3, reviewer: 'J.D.', text: "Ben was outstanding! He showed up exactly on time and was very friendly and courteous, displaying true character. He was very honest with me about the repairs to an older mower versus simply buying a new one. I will never have anyone else repair my mowers. Truly, a very honest man with great integrity. Excellent experience from start to finish. Highly recommend him." },
    { id: 4, reviewer: 'Nicki', text: "I called Mower Masters and Ben was able to schedule and complete my fall service in less than a week. Ben seemed very kind and was extremely thorough in answering all of my questions. He also gave me some advice on stuff I can do myself to prolong the life of my engines. Ben used a huge mat on my driveway to avoid any spills. I feel like the guys at John Deere don’t know my mower like Ben does. This service included everything I can think of and the total was very fair. I wish you great success. Thank you so much 🤙🏼" },
    { id: 5, reviewer: 'Sonny', text: "Ben at Mower Masters is a true blessing. He came to my house and repaired my push mower. Ben told me upfront what he charges and gave me the option to evaluate the cost vs buying a new mower. I love my old mower and had him make the repairs. I found Ben to be honest, knowledgeable, dependable, and friendly.One thing for sure, I’ll be using Ben again. He’s the real deal!" },
    { id: 6, reviewer: 'Chris', text: "Ben did a great job. Showed up on time, and fixed my engine. Price was extremely fair. Saved me from replacing an engine which would have been $600+. Will definitely use again, and recommend!" },
    { id: 7, reviewer: 'Joe', text: "First time using Mower Masters, I was impressed. They come to your home and do the work there so you do not have to transport your mower. Pricing is very reasonable. And, they went above and beyond by adding a stabilizer to my gasoline to keep it from breaking down over the idle winter season. I will use them again." },
    { id: 8, reviewer: 'Tronda', text: "Ben did a great job repairing our riding mower- at our house! He was always communicating with us via text and phone calls. We were informed as to what was happening every step of the way. Would greatly recommend him!" },
    { id: 9, reviewer: 'Brett', text: "I called Ben one afternoon after my mower had died on me mid-mow and he came over the next morning. He did a complete tune up including cleaning the outside, cleaning the air filter, changing the oil, adding fuel stabilizer, and sharpening the blades. He then found a bad spark plug and replaced it. Took only about an hour and now the mower runs like new! Would definitely recommend his services!" },
    { id: 10, reviewer: 'Andy', text: "Ben communicated very clearly about timelines of arrival and when parts arrived. What an easy experience to have him come to the house to fix and help maintain our mowers! Was very honest about pricing which was very reasonable considering the service he provides. Highly recommend!" },
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

            <span className="icon-link">
                <a className="link" href="https://www.google.com/search?sca_esv=1ef01aa32e62b85d&biw=1087&bih=1227&sxsrf=ANbL-n7c-9wQNUk1YPYOd0DMiaumK_62bA:1772393330710&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVZJpKp4mv3yaCBdMuBgzPkozvxWEQOg00CVvtKCa4P3-UjtcDku0x8gabxVxX5kyqDxlY8lA4PO2wC20GncMIFIU6vXzGw8ikJ_CSePRy7_ZZBSKw%3D%3D&q=Mower+Masters+LLC+Reviews&sa=X&ved=2ahUKEwiYhYTXt_-SAxUzJNAFHZ_mD9oQ0bkNegQIHhAH&cshid=1772393593787198">See all Google reviews</a>
            </span>
        </div>
    )
}