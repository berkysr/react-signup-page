import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ButtonComponent from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-6xl'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ButtonComponent></ButtonComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
