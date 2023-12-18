import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/apod/Main';
import Mars from './components/mars_rover/Mars';
import Home from './components/Home/Home';
import Memo from './components/Memo/Memo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apod" element={<Main />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </Router>
  );
}

export default App;