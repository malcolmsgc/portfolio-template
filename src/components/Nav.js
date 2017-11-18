import React from 'react';
import Icon from 'react-icons-kit';
import { twitter, linkedin2, github } from 'react-icons-kit/icomoon';

const Nav = (props) => {
  return (
    <nav>
      <ul className="nav-list">
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Work</li>
        </a>
        <a href="#">
          <li>Skills</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>
      <ul className="nav-social">
        <a href={props.contactInfo.linkedin}>
          <li id="linkedin">
            <Icon icon={linkedin2} size={30}/>
          </li>
        </a>
        <a href={props.contactInfo.twitter}>
          <li id="twitter">
            <Icon icon={twitter} size={30}/>
          </li>
        </a>
        <a href={props.contactInfo.github}>
          <li id="github">
            <Icon icon={github} size={30}/>
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
