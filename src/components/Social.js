import React from 'react';
import Icon from 'react-icons-kit';
import { twitter, linkedin2, github } from 'react-icons-kit/icomoon';

const Social = (props) => (
    <ul className="social">
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
)

export default Social