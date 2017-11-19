import React from 'react';

const Skill = (props) => (
  <div className="skill">
    <h3>{props.skill}</h3>
    <div className="skillbar">
      <div className="proficiency"></div>
    </div>
  </div>
)




export default Skill;
