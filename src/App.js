
import './App.css';
import blob1 from './blob1.svg'
import blob2 from './blob2.svg'
import First from './First'
import Quiz from './Quiz'
import React from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
function App() {

  return (<BrowserRouter>
   <div className="outerbox">
        <img src={blob1} alt="" className="Blob1"></img>
        <img src={blob2} alt="" className="Blob2"></img>
        <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
        </div></BrowserRouter>
  );
}

export default App;
