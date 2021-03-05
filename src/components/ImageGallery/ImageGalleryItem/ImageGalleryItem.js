import React from 'react';
import defaultImages from '../../../Images/default-image.png';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ query, onOpen }) => (
  <>
    {query.map(({ webformatURL, id, tags, largeImageURL }) => (
      <li className="ImageGalleryItem" key={id}>
        <img
          src={webformatURL}
          data-url={largeImageURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={onOpen}
        />
      </li>
    ))}
  </>
);

ImageGalleryItem.defaultProps = {
  webformatURL: defaultImages,
  largeImageURL: defaultImages,
  tag: 'image',
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
};

export default ImageGalleryItem;
