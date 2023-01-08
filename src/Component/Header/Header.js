import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant='dark' style={{ height: 80 }}>
                <Container className='header'>
                    <Navbar.Brand>

                        <Link to='/'>Home</Link>
                        <Link to='/course'>Course Cart</Link>
                        <Link to='/about'>About</Link>
                    </Navbar.Brand>
                </Container>

            </Navbar>

        </div>
    );
};

export default Header;