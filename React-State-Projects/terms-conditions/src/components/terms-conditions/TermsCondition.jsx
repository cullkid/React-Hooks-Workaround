import React, { useState } from 'react';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { username, password });
  };

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <div className={styles['input-group']}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className={styles['input-group']}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="acceptTerms">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          I accept the terms and conditions
        </label>
      </div>
      <button type="submit" disabled={!acceptTerms}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
