import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ query, onOpenModal }) => (
  <>
    <ul className="ImageGallery">
      <ImageGalleryItem query={query} onOpen={onOpenModal} />
    </ul>
  </>
);

ImageGallery.propTypes = {
  query: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
