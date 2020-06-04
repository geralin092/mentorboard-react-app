import React, { Component } from "react";

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';


function NavbarComponent(){
    return (<header id="header">
            <div className="container">
                <a href="/" id="logo">
                    <img src="https://mentorboard.careerwebsite.com/Sites/RRC/files/app/images/logo.jpg"></img>
                </a>
            </div>
        </header>
    )
}

export default NavbarComponent;