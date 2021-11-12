import React from 'react';
import ImageGallery from 'react-image-gallery';
import menu1 from '../Pictures/menu-1.png'
import menu2 from '../Pictures/menu-2.png'
import menu3 from '../Pictures/menu-3.png'

const images = [
    {
      original: menu1,
      thumbnail: menu1,
    },
    {
      original: menu2,
      thumbnail: menu2,
    },
    {
      original: menu3,
      thumbnail: menu3,
    },
  ];


class Gallery extends React.Component {
  render() {
    return <ImageGallery items={images} showPlayButton={false} />;
  }
}

export default Gallery