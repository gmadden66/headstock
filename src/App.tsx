import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Repo } from './components/Repo';
import { Version, Track } from './models'

const song:Track = {
  id: 12,
  name: "test song",
  status: "active",
  bounceLink: "http:",
  sessionLink: "http:",
  version: 2
}

function App() {
  
  return (
    <div className="App">
      <Sidebar /> 
      <Repo song={song} />
    </div>
  );
}

export default App;
