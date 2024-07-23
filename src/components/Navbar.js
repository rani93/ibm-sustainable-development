import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/plantimages/logo.png';
import './Navbar.css'; // Ensure this CSS file is imported

function NavbarComponent() {
  const [activeSection, setActiveSection] = useState('');
  const [logoInverted, setLogoInverted] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Get section elements by ID
    const sections = ['home', 'about', 'services', 'features', 'plants', 'contact'];

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state on load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className="navbar-container" fixed="top" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className={`logo ${logoInverted ? 'logo-inverted' : ''}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeSection === 'about' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</Nav.Link>
            <Nav.Link href="#features" className={activeSection === 'features' ? 'active' : ''}>Features</Nav.Link>
            <Nav.Link href="#plants" className={activeSection === 'plants' ? 'active' : ''}>Plants</Nav.Link>
            <Nav.Link href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</Nav.Link>
            <Nav.Link href="#contact" className="btn btn-primary rounded-pill py-2 px-4 resbtn">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
