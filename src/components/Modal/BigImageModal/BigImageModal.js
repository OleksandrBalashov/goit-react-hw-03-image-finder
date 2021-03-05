import React from 'react';
import PropTypes from 'prop-types';

const BigImageModal = ({ largeImg }) => (
  <>
    <img src={largeImg} alt="" />
  </>
);

BigImageModal.propTypes = {
  largeImg: PropTypes.string.isRequired,
};

export default BigImageModal;
