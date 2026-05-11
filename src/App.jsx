import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ServiceHighlights from "./Components/ServiceHighlights";
import MarketingTools from "./Components/MarketingTools";
import Cart from "./Components/Cart";
import { BrowserRouter } from 'react-router-dom'
import ProductDetail from "./Components/ProductDetail";
import BusinessCard from "./Components/BusinessCard";
import BusinessCardDetail from "./Components/BusinessCardDetail";
import Footer from "./Components/Footer";
import Brochures from "./Components/Brochures";
import BrochureDetail from "./Components/BrochureDetail";
import GiftSection from "./Components/GiftSection";
import GiftDetail from "./Components/GiftDetail";
import Checkout from "./Components/Checkout";




function App() {
  return (
  <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/businesscard" element={<BusinessCard />} />
        <Route path="/businesscard/:id" element={<BusinessCardDetail />} />
        <Route path="/brochures" element={<Brochures />} />
        <Route path="/brochures/:id" element={<BrochureDetail />} />
        <Route path="/gifts" element={<GiftSection />} />
        <Route path="/gifts/:id" element={<GiftDetail />} />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
