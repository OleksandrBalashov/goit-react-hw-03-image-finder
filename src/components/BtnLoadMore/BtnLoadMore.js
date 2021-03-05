import React from 'react';
import PropTypes from 'prop-types';

const BtnLoadMore = ({ onClickBtn }) => {
  return (
    <button type="button" className="Button" onClick={onClickBtn}>
      Load More
    </button>
  );
};

BtnLoadMore.propTypes = {
  onClickBtn: PropTypes.func,
};

export default BtnLoadMore;
