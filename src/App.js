import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import CreateDebit from './components/CreateDebit';
import { useState } from 'react';
import { getUser } from './utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
     <AuthPage setUser={setUser}/>
     <CreateDebit />
    </div>
  );
}

export default App;
