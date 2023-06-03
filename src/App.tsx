import React from 'react';
import './App.css';
import { LoggedIn } from './Components/LoggedIn';
import { User } from './Components/User';



function App() {
  return (
    <div className="App">
    <LoggedIn/>
    <User/>
    </div>
  );
}

export default App;

