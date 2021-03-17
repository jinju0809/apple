import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Projects from './components/projects';
import Timeline from './components/timeline';
import Contacts from './components/contact';


function App() {
  return (
    <div className="apples">
      <div id="wrap">
        <Sidebar />
        <div id="main">
          <Introduction/>
          <About /> 
          <Projects />
          <Contacts/>
        </div>
      </div>
    </div>
  );
}



export default App;
