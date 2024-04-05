import React from 'react';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact'
import Service from './Components/Service';

const App = () => {
  return (
    <div
    
    >
     <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      
     
     </Routes>
     
    </div>
  );
};

export default App;