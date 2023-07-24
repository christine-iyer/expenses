import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import { useState } from 'react';
import { getUser } from './utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
     <AuthPage setUser={setUser}/>
    </div>
  );
}

export default App;
