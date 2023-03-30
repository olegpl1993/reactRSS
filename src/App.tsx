import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Main from './pages/Main/Main';
import Error404 from './pages/Error404/Error404';
import Forms from './pages/Forms/Forms';
import Header from './pages/Header/Header';

function App() {
  const [pageState, setPageState] = useState('');
  return (
    <BrowserRouter>
      <div className="app">
        <Header pageName={pageState} />
        <Routes>
          <Route path="/" element={<Main setPageState={setPageState} />} />
          <Route path="/aboutUs" element={<AboutUs setPageState={setPageState} />} />
          <Route path="/forms" element={<Forms setPageState={setPageState} />} />
          <Route path="*" element={<Error404 setPageState={setPageState} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
