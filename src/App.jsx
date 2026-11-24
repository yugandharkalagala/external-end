import { useState } from 'react';

export default function App() {
  const [registration, setRegistration] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [registeredUser, setRegisteredUser] = useState(null);
  const [login, setLogin] = useState({ email: '', password: '' });
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  function handleRegistrationChange(event) {
    const { name, value } = event.target;
    setRegistration((previous) => ({ ...previous, [name]: value }));
  }

  function handleRegister(event) {
    event.preventDefault();
    setRegisteredUser({ ...registration });
    setRegistrationMessage('Registration completed successfully!');
    setLoginMessage('');
    setLoginSuccess(false);
  }

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setLogin((previous) => ({ ...previous, [name]: value }));
  }

  function handleLogin(event) {
    event.preventDefault();

    if (
      registeredUser &&
      login.email === registeredUser.email &&
      login.password === registeredUser.password
    ) {
      setLoginMessage('Login successfully!');
      setLoginSuccess(true);
    } else {
      setLoginMessage('Invalid email or password. Please try again.');
      setLoginSuccess(false);
    }
  }

  return (
    <main className="page">
      <header className="header">
        <p className="eyebrow">REACT PRACTICE PROJECT</p>
        <h1>Registration &amp; Login</h1>
        <p className="subtitle">Register your details, then log in using the same credentials.</p>
      </header>

      <section className="cards">
        <div className="card">
          <h2>Create Account</h2>
          <p className="card-description">Enter your details to register.</p>
          <form onSubmit={handleRegister}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={registration.name}
              onChange={handleRegistrationChange}
              required
            />

            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={registration.email}
              onChange={handleRegistrationChange}
              required
            />

            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={registration.password}
              onChange={handleRegistrationChange}
              required
              minLength="4"
            />

            <button type="submit">Register</button>
          </form>

          {registrationMessage && <p className="message success">{registrationMessage}</p>}

          {registeredUser && (
            <div className="details">
              <h3>Registered Details</h3>
              <p><strong>Name:</strong> {registeredUser.name}</p>
              <p><strong>Email:</strong> {registeredUser.email}</p>
              <p><strong>Password:</strong> {registeredUser.password}</p>
            </div>
          )}
        </div>

        <div className="card">
          <h2>Login</h2>
          <p className="card-description">Use your registered email and password.</p>
          <form onSubmit={handleLogin}>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={login.email}
              onChange={handleLoginChange}
              required
            />

            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={login.password}
              onChange={handleLoginChange}
              required
            />

            <button type="submit">Login</button>
          </form>

          {loginMessage && (
            <p className={`message ${loginSuccess ? 'success' : 'error'}`} role="status">
              {loginMessage}
            </p>
          )}
          {!registeredUser && (
            <p className="hint">Please register an account before trying to log in.</p>
          )}
        </div>
      </section>
      <footer>Demo only · Account details are stored in React state and reset when the page refreshes.</footer>
    </main>
  );
}
