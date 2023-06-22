import './App.css';
import { useSelector } from 'react-redux';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Counter from './features/counter/Counter';
import Login from './features/auth/Login';
import { selectLogin } from './features/auth/selectors';
import { selectCounterValue } from './features/counter/selectors';

function App(): JSX.Element {
  const value = useSelector(selectCounterValue);
  const user = useSelector(selectLogin);
  return (
    <div className="App">
      <h1>Счет: {value}</h1>
      <br />
      {user && (<h2>Привет, {user}</h2>)}
      <nav>
        <Link to="/login">Login</Link>{' '}
        <Link to="/counter">Counter</Link>
      </nav>
      <br />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
