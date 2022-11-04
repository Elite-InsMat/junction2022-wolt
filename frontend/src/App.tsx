import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import TestPage from './pages/testpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" caseSensitive={false} element={<TestPage />} />
      </Routes>
    </div >
  );
}

export default App;
