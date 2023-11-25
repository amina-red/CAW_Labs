// src/MyComponents.js
import React, { useState } from 'react';

//  1 and 2
export const ToggleButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>{clicked ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  );
};

// 3
export const App = () => {
  const [lastClicked, setLastClicked] = useState('');

  const handleButtonClick = (buttonNumber) => {
    setLastClicked(`Button #${buttonNumber}`);
    console.log(`Button #${buttonNumber} was clicked`);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>
      <p>{lastClicked && `${lastClicked} was clicked`}</p>
    </div>
  );
};

//4
export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Inc</button>
        <button onClick={this.handleDecrement}>Dec</button>
      </div>
    );
  }
};
