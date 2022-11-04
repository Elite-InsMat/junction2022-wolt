import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { FrontPage } from './pages/Frontpage';
import TestPage from './pages/testpage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/test" caseSensitive={false} element={<TestPage />} />
        <Route path="/" caseSensitive={false} element={<FrontPage />} />

      </Routes>
    </div >
  );
}

export default App;
