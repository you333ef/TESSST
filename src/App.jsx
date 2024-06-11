import React, { useState } from 'react';
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
        title: "Sorry!",
        text: "This product will be added later!",
        icon: "warning",
        button: false,
        timer: 1000,
      });
    } else {
      setCart([...cart, product]);
      swal({
        title: "The product has now been added to the cart",
        text: "You Welcome 😊",
        icon: "success",
        button: "Aww yiss!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    console.log(cart.length);
  }

  function REMOVE(product) {
    setCart(cart.filter(item => item.id !== product.id));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fake" element={<Fake />} />
        <Route path="/fakedommy" element={<FakeDommy />} />
        <Route path="/singledommy/:id" element={<SingleDommy />} />
        <Route path="/singlefake/:id" element={<SingleFake />} />
        <Route path="/cart" element={<Cart cart={cart} REMOVE={REMOVE} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
