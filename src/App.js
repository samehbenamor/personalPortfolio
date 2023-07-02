
import './App.css';
import React from 'react';
import { NavBar } from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import {Banner } from './Components/Banner';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
