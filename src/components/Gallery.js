import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class Gallery extends Component {

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
        // sectionRefs.work = this.workRef.offsetTop;
        let heightStr = (/\d+/).exec(window.getComputedStyle(this.workRef).height)[0];
        sectionRefs.workHeight = parseInt(heightStr, 10);
        this.setState({ sectionRefs });
      }

    render() {
        return (
            <section id="gallery" ref={(section) => this.workRef = section}>
                {this.props.gallery.map(
                    (item, i) => {
                        const { title, src, caption, url } = item;
                        return (
                            <GalleryItem key={i} title={title} src={src} caption={caption} url={url} />
                        );
                    }
                )}

            </section>
        );
    }
}

export default Gallery;
