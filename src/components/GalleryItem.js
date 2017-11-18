import React from 'react';
import placeholder from '../assets/gallery-placeholder.jpeg';

const GalleryItem = (props) => (
  <div className="gallery-item">
    <a href={props.url}>
      <figure><img src={props.src.length > 0 ? props.src : placeholder} alt={props.title} /></figure>
      <figcaption>
        <h4>{props.title}</h4>
        <p>{props.caption}</p>
      </figcaption>
    </a>
  </div>
);

export default GalleryItem;
