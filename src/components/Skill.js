import React from 'react';

const Skill = (props) => {
  const barLengthStyle = {
    width : props.proficiency + "%"
  } 
  return (
  <div className="skill">
    <h3>{props.skill}</h3>
    <div className="skillbar">
      <div className="proficiency" style={barLengthStyle}></div>
    </div>
  </div>
)
};




export default Skill;
