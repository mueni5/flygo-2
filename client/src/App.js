import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Airport from './pages/Airport';
import BookingList from './pages/BookingList';
import BookingItem from './pages/BookingItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"                 element={<Home />}        />
        <Route path="/signup"           element={<Signup />}      />
        <Route path="/login"            element={<Login />}       />
        <Route path="/profile"          element={<Profile />}     />
        <Route path="/airports/:id"     element={<Airport />}     />
        <Route path="/bookinglist"      element={<BookingList />} />
        <Route path="/bookinglist/:id"  element={<BookingItem />} />
      </Routes>
    </div>
  );
}

export default App;
