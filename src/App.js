<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodList from './components/FoodList';
import { Routes, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route path="/" element={<FoodList addToCart={addToCart} />} />
          <Route path="/account" element={<LoginSignup />} />
        </Routes>
      </main>
      <Footer />
    </>
=======
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (

    
  <>
  <Header />

  <main>
  <h1>welcome myfirstreactproject</h1>
  </main>

  <Footer />

  
  </>
>>>>>>> 3e2941a67890a339659d6351097c0c8bf4d14fda
  );
}

export default App;
