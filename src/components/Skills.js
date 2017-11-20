import React from 'react';
import Skill from './Skill';

const Skills = (props) => (
    <section id="skills">
      <h2>Skills</h2>
      <div id="skill-legend">
        <h4>Beginner</h4>
        <h4>Comfortable</h4>
        <h4>Pro</h4>
        <h4>Yoda</h4>
      </div>
      <div className="skill-table">
     { props.skills.map(
        (skill, i) => {
         const { skill: name, proficiency } = props.skills[i];
        return (
          <Skill key={i} skill={name} proficiency={proficiency} />
        );
      })}
      </div>
    </section> );
    


export default Skills;
