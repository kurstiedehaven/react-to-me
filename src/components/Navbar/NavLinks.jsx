import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// need to import css

// NOT DONE!!!
export const NavLinks = ({ closeNavbar, path, children }) => {
    return (
        <Nav.Link
            className="nav-link"
            as={Link}
            to={path}
            onClick={closeNavbar}
        >
            {children}
        </Nav.Link>
    );
};

export default NavLinks;