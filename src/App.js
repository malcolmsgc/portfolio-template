import React, { Component } from 'react';

// Components
import Header from "./components/Header"
import Nav from "./components/Nav"
import Gallery from "./components/Gallery"
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
      },
      gallery : [
        {title: "Pomodoro Timer", src : "", url : "https://twitter.com/MalcolmCumming", caption: "captions are great"},
        {title: "Tic Tac Toe Game", src : "", url : "#", caption: "captions are great"},
        {title: "Wikipedia Viewer", src : "", url : "#", caption: "captions are great"},
        {title: "Simon Game", src : "", url : "#", caption: "captions are great"},
        {title: "Calculator", src : "", url : "#", caption: "captions are great"},
        {title: "Weather applet", src : "", url : "#", caption: "captions are great"},
        {title: "Decimal to Roman Numeral Converter", src : "", url : "#", caption: "captions are great"},
        {title: "Twitch Channel Monitor", src : "", url : "#", caption: "captions are great"},
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Nav contactInfo={this.state.contactInfo} />
        <Gallery gallery={this.state.gallery}/>
      </div>

    );
  }
}

export default App;
