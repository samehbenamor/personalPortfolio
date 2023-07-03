
import './App.css';
import React from 'react';
import { NavBar } from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
