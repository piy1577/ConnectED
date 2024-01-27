import React from "react";
import { Card } from "../Components";

const List = (props) => {
    const data = props.data;
    return (
        <div className="products">
            {Object.keys(data).map((key, index) => (
                <div key={index}>
                    <span className="heading">
                        <h1>{key}</h1>
                    </span>
                    <div>
                        {key === "all" ? (
                            ""
                        ) : (
                            <div>
                                <div className="card-wrapper">
                                    {data[key].length === 0 ? (
                                        <span>Nothing to show</span>
                                    ) : (
                                        data[key].map((item, index) => (
                                            <Card
                                                key={index}
                                                className="card"
                                                id={item.id}
                                                image={item.image}
                                                owner={item.owner_name}
                                                product={item.product_name}
                                                hostel={item.hostel_name}
                                                rating={item.rating}
                                                rent={item.rent}
                                                available={item.available}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
const data = {
    boys: [
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://pyxis.nymag.com/v1/imgs/bdc/eae/6151a14aa22cce4d1797b3e3b54c749eaa-Phillips-Norelco.2x.rdeep-vertical.w245.jpg",
            owner_name: "nikhil",
            product_name: "trimmer",
            hostel_name: "Neelkanth Boys Hostel",
            rating: "4.2",
            rent: true,
            available: false,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://momspotted.com/wp-content/uploads/2018/09/AXE-Products.jpg",
            owner_name: "ravi",
            product_name: "perfume",
            hostel_name: "Neelkanth Boys Hostel",
            rating: "3",
            rent: false,
            available: true,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://m.media-amazon.com/images/I/61vR3xLS32L.jpg",
            owner_name: "rishabh",
            product_name: "cricket kit",
            hostel_name: "Neelkanth Boys Hostel",
            rating: "5",
            rent: true,
            available: true,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://m.media-amazon.com/images/I/714pWQP0+JL.jpg",
            owner_name: "Neeraj",
            product_name: "watch",
            hostel_name: "Kailash Boys Hostel",
            rating: "3",
            rent: false,
            available: true,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://im.idiva.com/luxury/photogallery/2013/May/beauty_and_the_boys_the_best_products_for_men_thumb.gif",
            owner_name: "aryan sharma",
            product_name: "cream",
            hostel_name: "Himadri Boys Hostel",
            rating: "4",
            rent: false,
            available: true,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://im.idiva.com/luxury/photogallery/2013/May/beauty_and_the_boys_the_best_products_for_men_thumb.gif",
            owner_name: "aryan sharma",
            product_name: "cream",
            hostel_name: "Himadri Boys Hostel",
            rating: "4",
            rent: false,
            available: true,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://im.idiva.com/luxury/photogallery/2013/May/beauty_and_the_boys_the_best_products_for_men_thumb.gif",
            owner_name: "aryan sharma",
            product_name: "cream",
            hostel_name: "Himadri Boys Hostel",
            rating: "4",
            rent: false,
            available: true,
        },
    ],
    girls: [
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://static-bebeautiful-in.unileverservices.com/Multipurpose-makeup-products-every-girl-needs_3.jpg",
            owner_name: "gayatri",
            product_name: "makeup",
            hostel_name: "Ambika Girls Hostel",
            rating: 3,
            rent: false,
            available: true,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://static-bebeautiful-in.unileverservices.com/Multipurpose-makeup-products-every-girl-needs_1.jpg",
            owner_name: "priyanka",
            product_name: "cream",
            hostel_name: "Parvati Girls Hostel",
            rating: 4.2,
            rent: false,
            available: true,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://m.media-amazon.com/images/I/81rAehGhpDL.jpg",
            owner_name: "tanisha",
            product_name: "bedsheet",
            hostel_name: "Aravali Girls Hostel",
            rating: 5,
            rent: false,
            available: true,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://i.etsystatic.com/30542255/r/il/be38ba/4725322601/il_fullxfull.4725322601_c0wy.jpg",
            owner_name: "khusi",
            product_name: "dress",
            hostel_name: "Satpura Girls Hostel",
            rating: 4.5,
            rent: true,
            available: true,
        },
        {
            id: "65941e4c4b183987ce860c7f",
            image: "https://img.faballey.com/images/Product/ILK00050Z/d3.jpg",
            owner_name: "madhu",
            product_name: "dress",
            hostel_name: "Ambika Girls Hostel",
            rating: 3,
            rent: true,
            available: false,
        },
    ],
    all: [
        {
            id: 1,
            image: "https://pyxis.nymag.com/v1/imgs/bdc/eae/6151a14aa22cce4d1797b3e3b54c749eaa-Phillips-Norelco.2x.rdeep-vertical.w245.jpg",
            owner_name: "nikhil",
            product_name: "trimmer",
            hostel_name: "Neelkanth Boys Hostel",
            rating: "4.2",
            rent: true,
            available: false,
        },
        {
            id: 1,
            image: "https://momspotted.com/wp-content/uploads/2018/09/AXE-Products.jpg",
            owner_name: "ravi",
            product_name: "perfume",
            hostel_name: "Neelkanth Boys Hostel",
            rating: "3",
            rent: false,
            available: true,
        },
        {
            id: 1,
            image: "https://m.media-amazon.com/images/I/61vR3xLS32L.jpg",
            owner_name: "rishabh",
            product_name: "cricket kit",
            hostel_name: "Neelkanth Boys Hostel",
            rating: "5",
            rent: true,
            available: true,
        },
        {
            id: 1,
            image: "https://m.media-amazon.com/images/I/714pWQP0+JL.jpg",
            owner_name: "Neeraj",
            product_name: "watch",
            hostel_name: "Kailash Boys Hostel",
            rating: "3",
            rent: false,
            available: true,
        },
        {
            id: 1,
            image: "https://im.idiva.com/luxury/photogallery/2013/May/beauty_and_the_boys_the_best_products_for_men_thumb.gif",
            owner_name: "aryan sharma",
            product_name: "cream",
            hostel_name: "Himadri Boys Hostel",
            rating: "4",
            rent: false,
            available: true,
        },
        {
            id: 1,
            image: "https://static-bebeautiful-in.unileverservices.com/Multipurpose-makeup-products-every-girl-needs_3.jpg",
            owner_name: "gayatri",
            product_name: "makeup",
            hostel_name: "Ambika Girls Hostel",
            rating: 3,
            rent: false,
            available: true,
        },
        {
            id: 1,
            image: "https://static-bebeautiful-in.unileverservices.com/Multipurpose-makeup-products-every-girl-needs_1.jpg",
            owner_name: "priyanka",
            product_name: "cream",
            hostel_name: "Parvati Girls Hostel",
            rating: 4.2,
            rent: false,
            available: true,
        },
        {
            id: 1,
            image: "https://m.media-amazon.com/images/I/81rAehGhpDL.jpg",
            owner_name: "tanisha",
            product_name: "bedsheet",
            hostel_name: "Aravali Girls Hostel",
            rating: 5,
            rent: false,
            available: true,
        },
        {
            id: 1,
            image: "https://i.etsystatic.com/30542255/r/il/be38ba/4725322601/il_fullxfull.4725322601_c0wy.jpg",
            owner_name: "khusi",
            product_name: "dress",
            hostel_name: "Satpura Girls Hostel",
            rating: 4.5,
            rent: true,
            available: true,
        },
        {
            id: 1,
            image: "https://img.faballey.com/images/Product/ILK00050Z/d3.jpg",
            owner_name: "madhu",
            product_name: "dress",
            hostel_name: "Ambika Girls Hostel",
            rating: 3,
            rent: true,
            available: false,
        },
    ],
};
const Dashboard = () => {
    return (
        <div className="dashboard">
            <List data={data} />
        </div>
    );
};

export default Dashboard;
