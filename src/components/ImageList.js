import React from 'react';

const ImageList = (props) => {
  return (
    <div>
      {props.images.map((image, index) => {
        return <img src={image.urls.regular} alt='blah' key={index} />;
      })}
    </div>
  );
};

export default ImageList;
