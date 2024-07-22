import React from 'react';

function RemoveButton() {
  const handleClick = () => {
    alert('Remove Button Clicked!');
  };

  return (
    <button onClick={handleClick}>Remove</button>
  );
}

export default RemoveButton;