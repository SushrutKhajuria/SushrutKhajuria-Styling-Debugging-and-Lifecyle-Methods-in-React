// Write your code below:
import { useState } from 'react';

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const validateInputs = () => {
    if (!username.trim() && !age.trim()) {
      setError('Please enter a valid name and age (non-empty values).');
      return false;
    }   
    if (!username.trim()) {
      setError('Please enter a valid name (non-empty value).');
      return false;
    }
    if (!age.trim() || +age <= 0) {
      setError('Please enter a valid age (> 0).');
      return false;
    }
    return true;
  };

  const addUserHandler = (event) => {
    event.preventDefault();  // Change 'e' to 'event'
    if (!validateInputs()) return;
    onAddUser({ username, age: +age });
    setUsername('');
    setAge('');
  };

  return (
    <>
      {error && (
        <div className="overlay" onClick={() => setError(null)}>
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <h2>Invalid Input</h2>
            <p>{error}</p>
            <button onClick={() => setError(null)}>Okay</button>
          </div>
        </div>
      )}
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;