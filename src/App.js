import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Contact } from './pages/Contact/Contact';
import { Login } from './pages/Login/Login';
import { Feature } from './components/Feature/Feature';
import { Steps } from './components/Steps/Steps';
import { Form } from './components/Forms/Form';
import { Footer } from './components/Footer/Footer';
import { User } from './components/User/User';
import { Admin } from './components/Admin/Admin';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/productos' element={<Products />} />
        <Route exact path='/nosotros' element={<AboutUs />} />
        <Route exact path='/contacto' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/ernestop/*' element={<User />} />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
      <Feature />
      <Steps />
      <Form />
      <User />
      <Admin />
      <Footer/>
    </div>
  );
}

export default App;

/*
<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/nosotros' element={<AboutUs />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user01' element={<User />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
*/