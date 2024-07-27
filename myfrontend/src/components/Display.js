import React, { useState } from 'react';
import axios from 'axios';
import './Display.css';

function DisplayButton() {
  const [displaypopup, setdisplaypopup] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setdisplaypopup(true);
    try {
      const response = await axios.get('/api/get_list/');
      setData(response.data);
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Network error. Please try again later.');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Display</button>
      {displaypopup && (
        <div className="display-popup">
          <div className="popup">
            <button onClick={() => setdisplaypopup(false)}>Close</button>
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