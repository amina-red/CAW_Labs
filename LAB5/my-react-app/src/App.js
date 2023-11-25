// src/App.js
import React, { useState } from 'react';
import { ToggleButton, App as MyAppComponent, Counter } from './MyComponents';
import { DisplayTab, DisplayTabWithIndex, DisplayTabWithClick } from './TableComponents';
import AuthForm from './AuthForm';
import DynamicDivsComponent from './DynamicDivsComponent';

function App() {
  const table = ["hello", "world", "from", "react"];
  const [users, setUsers] = useState([]);

  const handleLogin = (userData) => {
    setUsers([...users, userData]);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      {/* MyComponents */}
      <div>
        <ToggleButton />
        <MyAppComponent />
        <Counter />
      </div>

      {/* TableComponents */}
      <div>
        <h2>1</h2>
        <DisplayTab table={table} />

        <h2>2</h2>
        <DisplayTabWithIndex table={table} />

        <h2> 3</h2>
        <DisplayTabWithClick table={table} />
      </div>

      {/* AuthForm */}
      <div>
        <h2>Authentication Form</h2>
        <AuthForm onLogin={handleLogin} />
      </div>

    

      {/* User List */}
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.username} - {user.password}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

  {/* DynamicDivsComponent */}
  
  <div>
 
     <DynamicDivsComponent />
    
      </div>
     
    </div>
  );
}

export default App;
