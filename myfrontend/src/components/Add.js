import React from 'react';

function AddButton() {
  const handleClick = () => {
    alert('Add Button Clicked!');
  };

  return (
    <button onClick={handleClick}>Add</button>
  );
}

export default AddButton;