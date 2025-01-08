import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaMobileAlt, FaSms, FaCalculator } from 'react-icons/fa'; // Import icons
import logo from '../assets/img/logo 25@2x.png';
import navIcon1 from "../assets/img/vk white.png";
import navIcon2 from "../assets/img/telegram white.png";
import navIcon3 from "../assets/img/whatsapp white.png";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="custom-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-links">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Главная</Nav.Link>
              <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Услуги</Nav.Link>
              <Nav.Link href="/catalog" className={activeLink === 'catalog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('catalog')}>Каталог</Nav.Link>
              <Nav.Link href="#price-list" className={activeLink === 'price-list' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('price-list')}>Прайс-лист</Nav.Link>
              
              {/* New icons */}
              <Nav.Link href="/mobile-page" className="navbar-link">
                <FaMobileAlt size={24} />
              </Nav.Link>
              <Nav.Link href="/sms-page" className="navbar-link">
                <FaSms size={24} />
              </Nav.Link>
              <Nav.Link href="/PolygraphyCalculator" className="navbar-link">
                <FaCalculator size={24} />
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>связаться с нами</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
