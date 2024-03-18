import React from "react";

// NOT DONE
const ContactLinks = ({ link, title, children }) => {
    return (
        <div className="contact-links">
            <a href={link} target="_blank" rel="noreferrer">
                {children}
                <h3>{title}</h3>
            </a>
        </div>
    );
};

export default ContactLinks;