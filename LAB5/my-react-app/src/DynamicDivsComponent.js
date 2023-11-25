// src/DynamicDivsComponent.js
import React, { useState } from 'react';

const DynamicDivsComponent = () => {
  const [divs, setDivs] = useState([]);
  const [newDivStyle, setNewDivStyle] = useState({
    height: '',
    width: '',
    backgroundColor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDivStyle((prevStyle) => ({
      ...prevStyle,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    setDivs((prevDivs) => [
      ...prevDivs,
      {
        height: newDivStyle.height,
        width: newDivStyle.width,
        backgroundColor: newDivStyle.backgroundColor,
      },
    ]);

  
    setNewDivStyle({
      height: '',
      width: '',
      backgroundColor: '',
    });
  };

  return (
    <div>
      <h2>Add a Dynamic Div</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={newDivStyle.height}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Width:
          <input
            type="text"
            name="width"
            value={newDivStyle.width}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={newDivStyle.backgroundColor}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Add Div</button>
      </form>
      <h2>Add Dynamic Divs</h2>
      <div style={{ marginTop: '20px' }}>
        {divs.map((divStyle, index) => (
          <div
            key={index}
            style={{
              height: divStyle.height,
              width: divStyle.width,
              backgroundColor: divStyle.backgroundColor,
              border: '1px solid #000',
              margin: '5px',
            }}
          >
            Dynamic Div {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicDivsComponent;
