import React from 'react';
import './App.css';
import { Private } from './Components/auth/Private';
import { Profile } from './Components/auth/Profile';

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} Component={Profile} />
    </div>
  );
}

export default App;

