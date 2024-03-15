// Button.js
import React from 'react';
import './Button.css';

function Button({ label, onClick }) {
  return (
    <button className="customButton" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
