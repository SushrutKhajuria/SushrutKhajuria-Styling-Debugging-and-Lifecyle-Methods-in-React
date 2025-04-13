// Write your code at relevant places in the code below:
import { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => setUsers(prev => [...prev, user]);

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.username} ({user.age})</li>
        ))}
      </ul>
    </div>
  );
};

export default App;