import React, { useState } from 'react';
import './App.css';

function App() {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
    console.log('User registered:', registerUsername);
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log('User logged in:', loginUsername);
  };

  const handleAddToCart = () => {
    // Implement shopping cart functionality here
    console.log('Adding item to cart');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>

      <main className="App-main">
        <section>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </section>

        <section>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </section>

        <button onClick={handleAddToCart}>Add to Cart</button>
      </main>

      <footer className="App-footer">
        <p>&copy; 2023 E-Commerce Website</p>
      </footer>
    </div>
  );
}

export default App;
