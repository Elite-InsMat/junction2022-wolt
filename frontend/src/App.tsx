import React from 'react';
import { Route, Routes } from 'react-router-dom'
import TestPage from './pages/testpage';
import BlueButton from './components/BlueButton/BlueButton'

const App = () => {
  return (
    <div className="App">
      <div>
        <BlueButton text='Join this order'/>
      </div>
    </div >
  );
}

export default App;
