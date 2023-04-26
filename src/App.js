import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Cat from './components/Cat';
import Dog from './components/Dog';
import NoPageFound from './components/NoPageFound';
import Login from './components/Login';

function App() {
  const [ login, setLogin ] = useState(false);

  function updateLogin(value) {
    setLogin(value);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header login={login} updateLogin={updateLogin}/>}>
          <Route index element={<Home />} />
          <Route path="cats" element={<Cats />} />
          <Route path="cats/:id" element={<Cat />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:id" element={<Dog />} />
          <Route path="*" element={<NoPageFound /> } />
        </Route>
        <Route path="/login" element={<Login updateLogin={updateLogin}/>} />
      </Routes>
    </Router>
  );
}

export default App;
