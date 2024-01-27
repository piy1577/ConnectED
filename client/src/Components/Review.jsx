import React from "react";
import Star from "./Star";

const Card = ({ data }) => {
    return (
        <div className="reviewcard">
            <img src={data.image} alt={data.owner_name} />
            <div className="info">
                <h5>{data.owner_name}</h5>
                <div className="stars">
                    <Star n={1} set={() => {}} rating={data.rating} />
                    <Star n={2} set={() => {}} rating={data.rating} />
                    <Star n={3} set={() => {}} rating={data.rating} />
                    <Star n={4} set={() => {}} rating={data.rating} />
                    <Star n={5} set={() => {}} rating={data.rating} />
                </div>
                <div className="text">{data.review}</div>
            </div>
        </div>
    );
};

const Review = ({ reviews }) => {
    return (
        <div className="review">
            <h3>Other's Review</h3>
            {reviews.map((item) => (
                <Card data={item} />
            ))}
        </div>
    );
};

export default Review;
