import React,{useState} from 'react'
import "./Login.css"



;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your authentication logic, such as making an API call to a server.
    // For this example, let's just simulate a successful login if the username and password are both "demo".
    if (username === 'demo' && password === 'demo') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  if (loggedIn) {
    return (
      <div className='login'>
        <h1>Welcome, {username}!</h1>
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      </div>
    );
  }

  return (
    <div className='login'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
