import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Header from './Component/Bands/Header';
import LeftBar from './Component/Bands/LeftBar'
import User from './Page/User';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <LeftBar />
        <Routes>
          <Route path='/user/:id' element={<User />} />
          <Route path='*' element={<Navigate to='/user/12' />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>,
)

