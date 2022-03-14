import React from 'react';
import logo from './media/logo.svg';
import { FakeServer } from './utils';
import './styles/App.css';

FakeServer.register('/test');

function App() {

  const onClick = async () => {
    try {
      console.log('start');
      const res = await FakeServer.fetch('/test');;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p onClick={onClick}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
