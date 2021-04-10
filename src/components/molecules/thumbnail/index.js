import React from 'react';

const index = ({ image, title, onClick }) => {
  console.log(image);
  return (
    <div onClick={onClick}>
      <img src={image} alt={title} />
    </div>
  );
};

export default index;
