import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLinks } from '../Navbar/NavLinks';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const closeNavbar = () => setExpanded(false);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Kurstie Homepage</h1>
                </Col>
                <Col>
                    <NavLinks path="/" onClick={closeNavbar}>
                        Home
                    </NavLinks>
                    <NavLinks path="/about" onClick={closeNavbar}>
                        About
                    </NavLinks>
                    <NavLinks path="/portfolio" onClick={closeNavbar}>
                        Portfolio
                    </NavLinks>
                    <NavLinks path="/contact" onClick={closeNavbar}>
                        Contact
                    </NavLinks>
                </Col>
            </Row>
        </Container>
    );
}

export default Navbar;