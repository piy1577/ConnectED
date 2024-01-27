import React from "react";

const Contacts = ({ data, set }) => {
    return (
        <div className="contacts">
            {data.map((key, i) => (
                <div className="contact" key={i} onClick={() => set(i)}>
                    <img src={key.image} alt={key.name} />
                    <div className="contact-info">
                        <h4>{key.name}</h4>
                        {key.online && <div>online</div>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contacts;
