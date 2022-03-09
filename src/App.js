import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Products from './components/Products/products';
import AboutUs from './components/AboutUs/aboutUs';
import Contact from './components/Contact/contact';
import Login from './components/Login/login';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='productos' element={<Products />} />
        <Route path='nosotros' element={<AboutUs />} />
        <Route path='contacto' element={<Contact />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;