import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./landing-page/home/HomePage";
import Signup from './landing-page/signup/Signup';
import About from './landing-page/about/About';
import Products from './landing-page/products/Products';
import Pricing from './landing-page/pricing/Pricing';
import Support from './landing-page/support/Support';

import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/support" element={<Support />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
