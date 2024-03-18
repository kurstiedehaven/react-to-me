import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

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
        <Container
            fluid
            className="flex-column justify-content-center align-items-center">
            
            <h1 className="text-center">Welcome to my Portfolio</h1>
            <h2 className="text-center">I am Kurstie</h2>
        </Container>
    );
};

export default Homepage;