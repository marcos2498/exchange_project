import React, { useState } from 'react';
import axios from 'axios';
import './Display.css';

function DisplayButton() {
  const [filterPopup, setFilterPopup] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [filterType, setFilterType] = useState('');

  const handleFilterClick = () => {
    setFilterPopup(true);
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    // Use filterType to determine which data to fetch
    setFilterPopup(false);
    setDisplayPopup(true);

    try {
      const response = await axios.get(`/api/get_list?type=${filterType}`);
      setData(response.data);
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Network error. Please try again later.');
    }
  };

  return (
    <div>
      <button onClick={handleFilterClick}>Display</button>
      {filterPopup && (
        <div className="filter-popup">
          <div className="popup">
            <form onSubmit={handleFilterSubmit}>
              <label>
                Choose Type:
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  required
                >
                  <option value="">Select...</option>
                  <option value="commodity">Commodity Exchange</option>
                  <option value="fx">FX Exchange</option>
                </select>
              </label>
              <div className="button-container">
                <button type="button" onClick={() => setFilterPopup(false)}>Close</button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {displayPopup && (
        <div className="display-popup">
          <div className="popup">
            <button onClick={() => setDisplayPopup(false)}>Close</button>
            {error && <p className="error">{error}</p>}
            {data ? (
              <div>
                <h2>Commodity Details</h2>
                {data.map((item, index) => (
                  <div key={index}>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <p>Price: ${item.price}</p>
                    <p>Unit: {item.unit}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayButton;