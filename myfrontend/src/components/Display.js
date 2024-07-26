import React, { useState } from 'react';
import '../App.css';

function DisplayButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setShowPopup(true);
    try {
      const response = await fetch('/api/get_commodity/');
      
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred while fetching data.');
      }
    } catch (error) {
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Display</button>
      {showPopup && (
        <div className="popup">
          <button onClick={() => setShowPopup(false)}>Close</button>
          {error && <p className="error">{error}</p>}
          {data ? (
            <div>
              <h2>Commodity Details</h2>
              <p>Name: {data.name}</p>
              <p>Description: {data.description}</p>
              <p>Price: ${data.price}</p>
              <p>Unit: {data.unit}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DisplayButton;