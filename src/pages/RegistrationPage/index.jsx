import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { AppContext, AppProvider } from '../../store/AppContext';
import { useNavigate } from 'react-router';
import './reg.css';

const Registration = () => {
  const { authState, setAuthState } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setPasswordError(false);
    if (name.length > 0 && password.length > 0) {
      setAuthState(true);
      navigate('/');
    } else {
      if (name.length === 0) {
        setNameError(true);
      }
      if (password.length === 0) {
        setPasswordError(true);
      }
    }
  };

  return (
    <div className="register">
      <form action="" className="register__form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          className={`input ${nameError ? 'error' : ''}`}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {nameError && <p>Поле не может быть пустым</p>}
        <input
          type="email"
          placeholder="Email"
          className="input"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={`input ${passwordError ? 'error' : ''}`}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && <p>Поле не может быть пустым</p>}
        <button type="submit" className="button log">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
