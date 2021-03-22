import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Projects from './components/projects';
import Contacts from './components/contact';
import Zoom from 'react-reveal/Zoom';
import Aos from 'aos';
import 'aos/dist/aos.css';



function App() {
  React.useEffect(() => {
    Aos.init({});
  }, [])
  return (
    <div className="apples">
      <div id="wrap">
        <Sidebar />
        <div id="main">
          <Zoom>
            <Introduction/>
          </Zoom>
          <About /> 
          <Projects />
          <Contacts/>
        </div>
      </div>
    </div>
  );
}



export default App;
