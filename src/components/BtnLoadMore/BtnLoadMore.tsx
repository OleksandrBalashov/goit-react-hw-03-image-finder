import React from 'react';

interface Props {
  onClickBtn: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const BtnLoadMore = ({ onClickBtn }: Props) => {
  return (
    <button type="button" className="Button" onClick={onClickBtn}>
      Load More
    </button>
  );
};

export default BtnLoadMore;
