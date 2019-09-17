import React from 'react';
import styled from 'styled-components';

import Button from '@doltech/shared-components/es/Button';

import logo from './logo.svg';
import './App.css';

// const Button2 = Button;
const Button2 = styled.button`
  border-radius: 4px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button2>123</Button2>
        <Button2>123</Button2>
        <Button>123</Button>
      </header>
    </div>
  );
}

export default App;
