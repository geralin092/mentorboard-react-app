import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  Redirect,
  Route
} from "react-router-dom";

import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';
import HomeComponent from './components/home';


class App extends Component {
  constructor(){
    super();
    this.state = {
      
      redirect: false,
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    const { from } = this.props.location.state || { from: { pathname: "/404" } };
    const children = this.props.children;
    console.log(children);
    const {redirect} = this.state;
    const outputContent = () => { 
      return <section>{ children }</section> 
    }

    console.log(redirect);
    if (redirect) {
      return <Redirect to={from} />;
    }

    return (
      <div className="App" >
        <div id="contentContainer">
          <NavbarComponent />
          <div className="bodyContainer">
            {/* <HomeComponent /> */}
            {outputContent()}
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
