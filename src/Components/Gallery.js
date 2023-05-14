import React from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

import siargao from '../img/NaySiarigao.jpg';
import palawan from '../img/AstoriaPalawan.png';
import hundred from '../img/HundredIsland.png';

const images = [
  {
    original: siargao,
    thumbnail: siargao,
  },
  {
    original: palawan,
    thumbnail: palawan,
  },
  {
    original: hundred,
    thumbnail: hundred,
  },
];

const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    gallery: {
      display: 'block',
      maxWidth: '100%',
      maxHeight: '600px',
    },
    fullscreenOverlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    fullscreenContainer: {
      maxWidth: '90%',
    },
    fullscreenImage: {
      maxWidth: '100%',
      maxHeight: '90%',
    },
    fullscreenCloseButton: {
      color: '#fff',
      fontSize: '2em',
    },
    fullscreenPrevButton: {
      color: '#fff',
      fontSize: '2em',
      left: '0',
    },
    fullscreenNextButton: {
      color: '#fff',
      fontSize: '2em',
      right: '0',
    },
  };
  
  const Gallery = () => {
    const renderItem = (item) => {
      return (
        <div className='image-gallery-image'>
          <a href={item.original}>
            <img
              src={item.thumbnail}
              alt={item.description}
              title={item.description}
            />
          </a>
        </div>
      );
    };
  
    return (
      <div style={styles.container}>
        <ImageGallery
          items={images}
          style={styles.gallery}
          renderItem={renderItem}
          showFullscreenButton={true}
          fullscreenOverlayStyle={styles.fullscreenOverlay}
          fullscreenContainerStyle={styles.fullscreenContainer}
          fullscreenImageStyle={styles.fullscreenImage}
          fullscreenCloseButtonStyle={styles.fullscreenCloseButton}
          fullscreenPrevButtonStyle={styles.fullscreenPrevButton}
          fullscreenNextButtonStyle={styles.fullscreenNextButton}
        />
      </div>
    );
  };
  
  export default Gallery;
  