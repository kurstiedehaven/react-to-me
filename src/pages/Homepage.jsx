import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Homepage = () => {
    const [index, setIndex] = useState(0);

    // Look back at!!!!!
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }
        , []);
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Hi, I'm Kurstie Ho</h1>
                    <h2>Full Stack Developer</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Homepage;