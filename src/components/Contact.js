import React from 'react';

const Contact = (props) => (
  <section id="contact">
    <p>Want to work together?</p>
    <p>{props.contactInfo.email}</p>
    <p>{props.contactInfo.location ? `Current location: ${props.contactInfo.location}` : ""}</p>
  </section>
)




export default Contact;
