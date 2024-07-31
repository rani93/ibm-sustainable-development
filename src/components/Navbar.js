import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/plantimages/logo.png';
import './Navbar.css';

function NavbarComponent() {
  const [activeSection, setActiveSection] = useState('');
  const [logoInverted, setLogoInverted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = ['home', 'about', 'services', 'features', 'plant', 'process', 'contact'];

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // Check if the scroll position is within this section
          if (scrollPosition >= offsetTop - 60 && scrollPosition < offsetTop + offsetHeight - 60) {
            setActiveSection(section);
            if (section === 'about') {
              setLogoInverted(true);
            } else {
              setLogoInverted(false);
            }
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state on load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.substring(1) || 'home';
    setActiveSection(currentPath);
  }, [location]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Navbar className="navbar-container" fixed="top" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className={`logo ${logoInverted ? 'logo-inverted' : ''}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</Nav.Link>

            <Nav.Link onClick={() => scrollToSection('service')} className={activeSection === 'services' ? 'active' : ''}>Services</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('features')} className={activeSection === 'features' ? 'active' : ''}>Features</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('process')} className={activeSection === 'process' ? 'active' : ''}>Process</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/events" className={activeSection === 'events' ? 'active' : ''}>Events</Nav.Link>
            <Nav.Link as={Link} to="/blog" className={activeSection === 'blog' ? 'active' : ''}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/login" className="btn btn-primary rounded-pill py-2 px-4 resbtn">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
