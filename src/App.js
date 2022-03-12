import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Contact } from './pages/Contact/Contact';
import { Login } from './pages/Login/Login';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Forms/Form';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/nosotros' element={<AboutUs />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Form />
      <Footer/>
    </div>
  );
}

export default App;