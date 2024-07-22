import React from 'react';

function DisplayButton() {
  const handleClick = () => {
    alert('Display Button Clicked!');
  };

  return (
    <button onClick={handleClick}>Display</button>
  );
}

export default DisplayButton;