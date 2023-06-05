import React from 'react';
import './App.css';
import { UserContexProvider } from './Components/UserContext';
import { useReducer } from './Components/context/User'



function App() {
  return (
    <div className="App">
   <UserContexProvider>
    <User/>
   </UserContexProvider>
    </div>
  );
}

export default App;

