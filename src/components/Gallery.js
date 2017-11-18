import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = (props) => {
    return (
        <section id="gallery">
            {props.gallery.map(
                (item, i) => {
                    const { title, src, caption, url } = item;
                    return (
                        <GalleryItem key={i} title={title} src={src} caption={caption} />
                    );
                }
            )}

        </section>
    );
}

export default Gallery;
