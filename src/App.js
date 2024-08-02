import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';  
import EventList from './pages/Eventlist';  
 import BlogPage from './pages/BlogPage';     
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />     
         <Route path="/blog" element={<BlogPage />} />          
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
