import React from 'react';

function SearchButton() {
  const handleClick = () => {
    alert('Remove Button Clicked!');
  };

  return (
    <button onClick={handleClick}>Search</button>
  );
}

export default SearchButton;