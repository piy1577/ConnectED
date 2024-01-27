import React, { useEffect, useState } from "react";
import Card from "../Components/Card2";
import { Request } from "../Components";

const Cart = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Request.cart(setData, setLoading);
    }, []);
    return (
        <>
            {!loading && (
                <div className="cartWrapper">
                    {Object.keys(data).map((key, i) => (
                        <div key={i}>
                            <h1>
                                <span className="Heading">
                                    Product for {key}:
                                </span>
                            </h1>
                            <div className="cardWrapper">
                                {data[key].length === 0 ? (
                                    <div>Nothing to show</div>
                                ) : (
                                    data[key].map((item, index) => (
                                        <Card
                                            key={index}
                                            id={item._id}
                                            image={item.images[0]}
                                            price={item.price}
                                            product={item.name}
                                            rent={item.rent}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Cart;
