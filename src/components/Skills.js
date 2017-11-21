import React, { Component } from 'react';
import Skill from './Skill';



class Skills extends Component {

  componentDidMount() {
    this.updateRef();
  }

  componentDidUpdate() {
    if (this.props.sectionRefs.needsUpdate === true) {
      this.updateRef();
    }
  }

  updateRef() {
    const sectionRefs = this.props.sectionRefs;
    // sectionRefs.skills = this.skillsRef.offsetTop;
    let heightArr = (/\d+/).exec(window.getComputedStyle(this.skillsRef).height) || "0";
    sectionRefs.skillsHeight = parseInt(heightArr[0], 10);
    this.setState({ sectionRefs });
  }


  render() {
    return (
    <section id="skills" ref={(section) => this.skillsRef = section}>
      <h2>Skills</h2>
      <div id="skill-legend">
        <h4>Beginner</h4>
        <h4>Comfortable</h4>
        <h4>Pro</h4>
        <h4>Yoda</h4>
      </div>
      <div className="skill-table">
     { this.props.skills.map(
        (skill, i) => {
         const { skill: name, proficiency } = this.props.skills[i];
        return (
          <Skill key={i} skill={name} proficiency={proficiency} />
        );
      })}
      </div>
    </section> 
    );
  }
}
    


export default Skills;
