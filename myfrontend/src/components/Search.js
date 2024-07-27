import React, { useState } from 'react';
import './Search.css'
function SearchButton() {
  const[searchPopup, setSearchPopup] = useState(false)
  const[name, setSearchname] = useState('')
  const handleClick = () => {
    setSearchPopup(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/search_commodity/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });

    if (response.ok) {
      alert('Search sucessful');
      setSearchPopup(false);
      setSearchname('');
    } else {
      alert('Error could not search')
    }
  };


  return (
    <div>
      <button onClick={handleClick}>Search</button>
      {searchPopup && (
        <div className="search-popup">
          <div className="popup"> {/* Add this div with the className "popup" */}
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setSearchname(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setSearchPopup(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchButton;