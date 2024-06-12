import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Services from './components/Services';
import Fake from './components/Fake';
import FakeDommy from './components/FakeDommy';
import SingleDommy from './components/SingleDommy';
import SingleFake from './components/SingleFake';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import swal from 'sweetalert';

const App = () => {
  const [dark, setDark] = useState(false);
  const [cart, setCart] = useState([]);

  function isDark() {
    setDark(!dark);
  }

  function addToCart(product) {
    const value = cart.find(item => item.id === product.id);
    if (value) {
      swal({
        title: "Already Added!",
        text: "This product is already in your cart.",
        icon: "info",
        button: "OK",
        timer: 1000,
      });
    } else {
      setCart([...cart, product]);
      swal({
        title: "Added to Cart",
        text: "The product has been added to your cart.",
        icon: "success",
        button: "Great!",
        timer: 1000,
      });
    }
    console.log(cart.length);
  }

  function REMOVE(product) {
    setCart(cart.filter(item => item.id !== product.id));
  }

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <Nav dark={dark} isDark={isDark} cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/fake" element={<Fake />} />
        <Route path="/fakedommy" element={<FakeDommy  />} />
        <Route path="/singledommy/:id" element={<SingleDommy />} />
        <Route path="/singlefake/:id" element={<SingleFake />} />
        <Route path="/cart" element={<Cart cart={cart} REMOVE={REMOVE} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
