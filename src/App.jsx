import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login'
import Header from './components/interfaz'
import Interfaz from './components/interfaz';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/interfaz' element={<Interfaz/>} />
      </Routes>
    </Router>
  );
}

export default App;
