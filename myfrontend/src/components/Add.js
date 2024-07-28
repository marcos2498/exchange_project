import React, { useState } from 'react';
import '../App.css';

function AddButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState('');

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/add_commodity/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, price, unit }),
    });
    if (response.ok) {
      // Handle successful addition
      alert('Commodity added successfully!');
      setShowPopup(false);
      setName('');
      setDescription('');
      setPrice('');
      setUnit('');
    } else {
      // Handle error
      alert('Error adding commodity');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      {showPopup && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Description:
              <select
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                >
                  <option value="">Select one</option>
                  <option value="commodity">Commodity</option>
                  <option value="fx">FX</option>
                </select>
            </label>
            <label>
              Price:
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <label>
              Unit/Type:
              <input
                type="text"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default AddButton;