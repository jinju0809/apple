import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Projects from './components/projects';
import Timeline from './components/timeline';



function App() {
  return (
    <div className="apple">
     <Sidebar/>
     <Introduction/> <About/> <Projects/><Timeline/>
    </div>
  );
}



export default App;
