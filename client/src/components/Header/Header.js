import React from 'react';
//import { Link } from 'react-router-dom';
//import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-center">
            <Navbar.Brand>HotSpot</Navbar.Brand>
        </Navbar>
    )
}

export default Header;
