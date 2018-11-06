import React from 'react';

const ParkListItem = ({ name, onClick }) => {
  return (
    <div onClick={onClick}>
      <p>{name}</p>
    </div>
  );
};

export default ParkListItem;
