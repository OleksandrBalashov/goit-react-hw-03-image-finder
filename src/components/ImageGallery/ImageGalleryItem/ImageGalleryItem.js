import React from 'react';
import defaultImages from '../../../Images/default-image.png';

// interface Props {
//   query: string[] | [];
//   onOpen(e?: React.MouseEvent<HTMLImageElement, MouseEvent>): Promise<void>;
// }

// interface Query {
//   webformatURL: string;
//   id: number;
//   tags: string;
//   largeImageURL: string;
// }

const ImageGalleryItem = ({ query, onOpen }) => {
  console.log(query);
  return (
    <>
      {query.map(({ webformatURL, id, tags, largeImageURL }) => (
        <li className="ImageGalleryItem" key={id}>
          <img
            src={webformatURL ? webformatURL : defaultImages}
            data-url={largeImageURL ? largeImageURL : defaultImages}
            alt={tags}
            className="ImageGalleryItem-image"
            onClick={onOpen}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
