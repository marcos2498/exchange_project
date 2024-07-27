import React, { useState } from 'react';
import './Remove.css'
function RemoveButton() {
  const [removePopup, setRemovePopup] = useState(false)
  const [name, setName] = useState('')

  const handleClick = () => {
    setRemovePopup(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/remove_commodity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      alert('Commodity removed sucessfully');
      setRemovePopup(false);
      setName('');
    } else {
      alert('Error removing security')
    }
  };


  return (
    <div>
      <button onClick={handleClick}>Remove</button>
      {removePopup && (
        <div className="remove-popup">
          <div className="popup"> {/* Add this div with the className "popup" */}
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setRemovePopup(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RemoveButton;