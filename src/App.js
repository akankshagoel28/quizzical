
import './App.css';
import blob1 from './blobs1.png'
import blob2 from './blob2.png'
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
