import React, { Component } from "react";

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

class FooterComponent extends Component{
    constructor(props){
      super(props);
      this.state={
      };
    }

    render(){
        return(
            <footer className="">
                <div className="container">
                    <p>
                        Job sites powered by <a href="https://www.yourmembership.com/products/career-center/" rel="nofollow">YourMembership</a>
                        </p><ul>
                            <li><a href="/RRC/terms/usage">Terms of Use</a></li>
                            <li><a href="/RRC/terms/privacy">Privacy Policy</a></li>
                        </ul>
                </div>
            </footer>
        )
    }
}

export default FooterComponent;