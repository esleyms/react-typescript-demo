import React from 'react';
import './App.css';
import { Heading } from './Components/Heading';
import { Status } from './Components/Status';
import { Oscar } from './Components/Oscar'; // Importe o componente Oscar
import { Greet } from './Components/Greet';

function App() {
  return (
    <div className="App">
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading> 
      </Oscar>
      <Greet name='Vishwas'  isLoggedIn={false}/>
    </div>
  );
}

export default App;

