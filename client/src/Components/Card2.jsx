import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="cart-card-wrapper">
            <Link to={`/${props.id}`} className="cart-card">
                <img src={props.image} alt={props.owner} />
                <h1>{props.product}</h1>
                <div>price: &nbsp;{props.price}</div>
            </Link>
        </div>
    );
};

export default Card;
