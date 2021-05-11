import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

interface Props {
  query: string[];
  onOpenModal(
    e?: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ): Promise<void>;
}

const ImageGallery = ({ query, onOpenModal }: Props) => (
  <>
    <ul className="ImageGallery">
      <ImageGalleryItem query={query} onOpen={onOpenModal} />
    </ul>
  </>
);

export default ImageGallery;
