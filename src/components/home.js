import React, { Component } from "react";
import CreateProfileCardComponent from './cards/create-profile';
import ReturnUserCardComponent from './cards/return-user';

class HomeComponent extends Component{
    constructor(props){
      super(props);
      this.state={
      };
    }

    componentDidMount() {
        console.log('did mount');
    }

    render(){
        return(
            <div>
                <div className="pageTitle">
                <a href="/RRC/User/">Mentoring Center</a>
                </div>
                <div className="jt_cte_area jt_cte_area-shrinkwrap noborder" id="divTest">
                    <p>
                        The Residential Real Estate Council(RRC) Mentoring Center is where professionals connect to establish mentor/mentee relationships that foster personal and professional growth and development.
                        <br /><br />
                        Serving as a mentor or becoming a mentee can help you direct your future, expand your professional network, gain knowledge and perspective on the workplace, and deliver tremendous personal satisfaction.
                        <br /><br />
                        Next Steps to Take Advantage of our Mentoring Center:<br />
                        •	Register and validate your account, or if you are returning user simply log in.<br />
                        •	You can use the same log in access the Center as a Mentor or Mentee.<br />
                        •	Create your profile(s).<br />
                        •	Search through mentor or mentee profiles, and initiate contact with individuals that meet the criteria you seek.
                        <br /><br />
                        We hope you find the experience fulfilling.
                    </p>
                
                </div>
                <CreateProfileCardComponent />
                <ReturnUserCardComponent />
                <br />
            </div>
            
            // <header id="header">
            //     <div className="container">
            //         <a href="#" id="logo">
            //             <img src="https://mentorboard.careerwebsite.com/Sites/RRC/files/app/images/logo.jpg"></img>
            //         </a>
            //     </div>
            // </header>
            // <Navbar bg="light" expand="lg">
            // <Navbar.Brand href="#home">Mentorboard</Navbar.Brand>
            // <Navbar.Toggle aria-controls="basic-navbar-nav" />
            // <Navbar.Collapse id="basic-navbar-nav">
            //     <Nav className="mr-auto">
            //     <Nav.Link href="#home">Home</Nav.Link>
            //     <Nav.Link href="#link">Link</Nav.Link>
            //     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            //         <NavDropdown.Divider />
            //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            //     </NavDropdown>
            //     </Nav>
            //     <Form inline>
            //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            //     <Button variant="outline-success">Search</Button>
            //     </Form>
            // </Navbar.Collapse>
            // </Navbar>
        )
    }
}

export default HomeComponent;