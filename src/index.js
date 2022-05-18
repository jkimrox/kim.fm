import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Albums from "./components/Albums"
import Nav from "./components/nav"
import Tracks from "./components/Tracks"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Tracks" element={<Tracks />} />
        </Routes>
      </Router>
  </React.StrictMode>
);

