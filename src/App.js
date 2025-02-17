<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Increase quantity if item is already in cart
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
  };

  return (
    <>
<<<<<<< HEAD
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
=======
      <Header cart={cart} setIsLoginOpen={setIsLoginOpen} />
      
      <main style={{ filter: isLoginOpen ? "blur(3px)" : "none" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Add this */}

        </Routes>
      </main>

      <Footer />

      <LoginSignup isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </>
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
  );
}

export default App;
