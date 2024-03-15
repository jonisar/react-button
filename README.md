# react-button

### How to use

```
// App.js or any other component
import React from 'react';
import Button from './components/Button'; // Adjust the import path based on your file structure

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}

export default App;
```
