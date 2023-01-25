import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AdDesigner from './components/AdDesigner'
import Votes from './components/Votes'
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='bod'>
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
