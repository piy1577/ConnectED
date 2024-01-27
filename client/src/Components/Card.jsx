import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <Link to={`/${props.id}`} className="card">
            <img src={props.image} alt={props.owner} />
            <h1>{props.product}</h1>
            <div>Owner: &nbsp;{props.owner}</div>
            <div>{props.hostel}</div>
            <div>Rating: &nbsp;&nbsp;&nbsp;&nbsp; {props.rating}</div>
            <div className="last">
                <span>{props.rent ? "For Rent" : "For Sale"}</span>
                <span>
                    {props.available ? (
                        <div style={{ color: "#7FE787" }}>
                            <TiTickOutline />
                            Available
                        </div>
                    ) : (
                        <div style={{ color: "#EF6A6A" }}>
                            <ImCross /> Rented
                        </div>
                    )}
                </span>
            </div>
        </Link>
    );
};

export default Card;
