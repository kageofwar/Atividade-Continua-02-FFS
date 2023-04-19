import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './folder';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">AC02</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route exact path="/">
        </Route>
        <Route path="/about" element = {<About />}>
        </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;