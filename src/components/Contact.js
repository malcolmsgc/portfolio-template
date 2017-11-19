import React from 'react';

const Contact = (props) => (
  <section id="contact">
    <div>
      <h3>Want to work together?</h3>
      <a href={`mailto:${props.contactInfo.email}`}>{props.contactInfo.email}</a>
      <p><em>{props.contactInfo.location ? `Current location: ${props.contactInfo.location}` : ""}</em></p>
    </div>

  </section>
)




export default Contact;
