import React, { Component } from 'react';
import Social from './Social';

class Contact extends Component {

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
    // sectionRefs.contact = this.contactRef.offsetTop;
    let heightStr = (/\d+/).exec(window.getComputedStyle(this.contactRef).height)[0];
    sectionRefs.contactHeight = parseInt(heightStr, 10);
    sectionRefs.needsUpdate = false;
    this.setState({ sectionRefs });
  }

  render() {
    return (
      <section id="contact" ref={(section) => this.contactRef = section}>
        <div>
          <h3>Want to work together?</h3>
          <a href={`mailto:${this.props.contactInfo.email}`}>{this.props.contactInfo.email}</a>
          <p><em>{this.props.contactInfo.location ? `Current location: ${this.props.contactInfo.location}` : ""}</em></p>
          <Social contactInfo={this.props.contactInfo} />
        </div>
      </section>
    );
  }

}




  export default Contact;
