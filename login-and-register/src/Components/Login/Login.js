import React,{useState} from 'react'
import "./Login.css"

function Login() {
  const [isLogin, setIsLogin] = useState(true);
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
    
    if (username === 'demo' && password === 'demo') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='auth-page'>
      {loggedIn ? (
        <div className='auth-content'>
          <h1>Welcome, {username}!</h1>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div className='auth-content'>
          <h1>{isLogin ? 'Login' : 'Register'} Page</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type='submit'>{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <p>
            {isLogin
              ? "Don't have an account? Click below to register."
              : 'Already have an account? Click below to login.'}
          </p>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </div>
      )}
    </div>
  );
}



export default Login;
