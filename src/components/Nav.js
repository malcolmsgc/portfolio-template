import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import Social from './Social';

class Nav extends Component {

  constructor() {
    super();
    // binding methods, which is a superfluous given the state and methods live in same
    // component but doing it in case that gets forgotten about in any refactoring
    this.isActive = this.isActive.bind(this);
    this.activeNavItem = this.activeNavItem.bind(this);
    this.section = {};
    this.state = {
      activeIndex: null //takes index (zero based) of nav item to give active class
    }
  }


  activeSection(e) {
    const { aboutHeight, workHeight, skillsHeight, contactHeight } = this.props.sectionRefs;
    switch (true) {
      case window.scrollY < aboutHeight:
        this.activeNavItem(0);
        break;
      case (window.scrollY) < aboutHeight + workHeight:
        this.activeNavItem(1);
        break;
      case (window.scrollY < aboutHeight + workHeight + (skillsHeight / 1.5)):
        this.activeNavItem(2);
        break;
      case (window.scrollY < aboutHeight + workHeight + skillsHeight):
        this.activeNavItem(3);
        break;
      case (window.scrollY < aboutHeight + workHeight + skillsHeight + contactHeight):
        this.activeNavItem(3);
        break;
      default:
        this.activeNavItem(null);
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle((e) => this.activeSection(e), 200))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle((e) => this.activeSection(e), 200));
  }

  activeNavItem(index) {
    this.setState({ activeIndex: index });
  }

  // sets nav item class to active if index matches state's activeIndex matches
  isActive(index) {
    return (this.state.activeIndex === index) ? "active" : "";
  }

  render() {
    return (
      <nav>
        <ul className="nav-list">
          <a href="#about" className={this.isActive(0)} onClick={() => this.activeNavItem(0)}>
            <li>About</li>
          </a>
          <a href="#gallery" className={this.isActive(1)} onClick={() => this.activeNavItem(1)}>
            <li>Work</li>
          </a>
          <a href="#skills" ref={(section) => this.section.skills = section} className={this.isActive(2)} onClick={() => this.activeNavItem(2)}>
            <li>Skills</li>
          </a>
          <a href="#contact" ref={(section) => this.section.contact = section} className={this.isActive(3)} onClick={() => this.activeNavItem(3)}>
            <li>Contact</li>
          </a>
        </ul>
        <Social contactInfo={this.props.contactInfo} />
      </nav>
    );
  }

}

export default Nav;
