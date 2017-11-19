import React from 'react';
import Skill from './Skill';

const Skills = (props) => (
    <section id="skills">
      <div id="skilllegend">
        <h4>Beginner</h4>
        <h4>Comfortable</h4>
        <h4>Pro</h4>
        <h4>Yoda</h4>
      </div>
     { props.skills.map(
        (skill, i) => {
         const { skill: name, proficiency } = props.skills[i];
        return (
          <Skill key={i} skill={name} proficiency={proficiency} />
        );
      })}
    </section> );
    


export default Skills;
