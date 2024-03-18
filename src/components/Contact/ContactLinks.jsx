// DONE
import React from "react";

const ContactLinks = ({ link, title, children }) => {
    return (
        <div
            className = "contact-links"
            target = "_blank"
            rel="noreferrer"
        >
            <a href={`${link}`}>
                {title}
                {children}
            </a>
        </div>
    );
};

export default ContactLinks;