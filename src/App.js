import React, { Component } from 'react';

// Components
import Header from "./components/Header"
import Nav from "./components/Nav"
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
      contactInfo: {
        email: "malcolmsgc@gmail.com",
        twitter: "https://twitter.com/MalcolmCumming",
        linkedin: "https://www.linkedin.com/in/malcolmcumming/",
        github: "https://github.com/malcolmsgc",
      }
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Nav contactInfo={this.state.contactInfo} />
      </div>

    );
  }
}

export default App;
