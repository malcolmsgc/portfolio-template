import React, { Component } from 'react';

// Components
import Header from "./components/Header"
import Nav from "./components/Nav"
import Gallery from "./components/Gallery"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
      profile: {
        title: "",
        about: null, // Must be jsx. <p> tags necessary for styling
        imgSrc: "",
      },
      contactInfo: {
        email: "malcolmsgc@gmail.com",
        twitter: "https://twitter.com/MalcolmCumming",
        linkedin: "https://www.linkedin.com/in/malcolmcumming/",
        github: "https://github.com/malcolmsgc",
        location: "Utopia",
      },
      gallery : [
        {title: "Pomodoro Timer", src : "", url : "https://pomodoro-timer.now.sh/", caption: "captions are great"},
        {title: "Tic Tac Toe Game", src : "", url : "https://tictactoe.now.sh/", caption: "captions are great captions are great captions are great captions are great captions are great captions are great captions are great captions are great"},
        {title: "Wikipedia Viewer", src : "", url : "https://malcolmsgc.github.io/FCC-Wikipedia-Viewer/", caption: "captions are great"},
        {title: "Simon Game", src : "", url : "https://simon-game.now.sh/", caption: "captions are great"},
        {title: "Calculator", src : "", url : "https://simple-calculator.now.sh/", caption: "captions are great"},
        {title: "Weather applet", src : "", url : "#", caption: "captions are great"},
        {title: "Decimal to Roman Numeral Converter", src : "", url : "https://codepen.io/malcolmsgc/full/EmWpoM/", caption: "captions are great"},
        {title: "Twitch Channel Monitor", src : "", url : "https://malcolmsgc.github.io/FCC-Twitch-Viewer/", caption: "captions are great"},
      ],
      skills : [
        { skill: "Skill A", proficiency: 100 },
        { skill: "Skill B", proficiency: 25 },
        { skill: "Skill C", proficiency: 60 },
        { skill: "Skill D", proficiency: 85 },
      ]
    };
  }

  render() {
    return (
      <div>
        <Header about={this.state.profile}/>
        <Nav contactInfo={this.state.contactInfo} />
        <Gallery gallery={this.state.gallery}/>
        <Skills skills={this.state.skills}/>
        <Contact contactInfo={this.state.contactInfo} />
      </div>

    );
  }
}

export default App;
