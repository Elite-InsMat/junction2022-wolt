import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { FrontPage } from './pages/Frontpage';
import OrderPage from './pages/order-page/order-page';
import RestaurantPage from './pages/restaurant-page/restaurant-page';
import TestPage from './pages/testpage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/test" caseSensitive={false} element={<TestPage />} />
        <Route path="/order" caseSensitive={false} element={<OrderPage />} />
        <Route path="/restaurant" caseSensitive={false} element={<RestaurantPage />} />
        <Route path="/" caseSensitive={false} element={<FrontPage />} />
      </Routes>
    </div >
  );
}

export default App;
