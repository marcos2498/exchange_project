import React, { useState } from 'react';
import './Search.css'
function SearchButton() {
  const[searchPopup, setSearchPopup] = useState(false)
  const[name, setSearchname] = useState('')
  const[detailsPopup, setDetailsPopup] = useState(false)
  const [commodity, setCommodity] = useState(null);


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
      const result = await response.json();
      setCommodity(result.commodity);
      setSearchPopup(false);
      setDetailsPopup(true);
      setSearchname('');
    } else {
      alert('Error could not search');
    }
  };


  return (
    <div>
      <button onClick={handleClick}>Search</button>
      {searchPopup && (
        <div className="search-popup">
          <div className="popup">
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
      {detailsPopup && commodity && (
        <div className="details-popup">
          <div className="popup">
            <h2>Commodity Details</h2>
            <p><strong>Name:</strong> {commodity.name}</p>
            <p><strong>Description:</strong> {commodity.description}</p>
            <p><strong>Price:</strong> ${commodity.price}</p>
            <p><strong>Unit:</strong> {commodity.unit}</p>
            <button onClick={() => setDetailsPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchButton;