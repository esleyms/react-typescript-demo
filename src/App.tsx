import React from 'react';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';

function App() {
  const personName = {
    firstName: 'Bruce',
    lastName: 'Wayne',
  };

  const nameList = [
    { firstName: 'Bruce', lastName: 'Wayne' },
    { firstName: 'Clark', lastName: 'Kent' },
    { firstName: 'Bruce', lastName: 'Wayne' }
  ];

  return (
    <div className="App">
      <h2>
        <Greet name="Vishwas" messageCount={20} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
      </h2>
    </div>
  );
}

export default App;
