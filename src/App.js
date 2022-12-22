import React from 'react'
// import './App.css';

import { BrowserRouter as Router  , Routes ,Route  } from 'react-router-dom'
import Home from './pages/Index'
import SigninPage from './pages/signin';

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about';
import Socketio from './pages/socketIo';




function App() {
  return (
 
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="about" element={<About />} />
        <Route path="/signin" element={<SigninPage/>} exact />
        <Route path="/socketIo" element={<Socketio/>} exact />
      </Routes>
    
    </Router>
  );
}

export default App;
