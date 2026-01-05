import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { meksLogo } from "../assets/image";
import { Socials } from "./ContactForm"

export const Header = () => {
  const [toggle, setToggle] = useState('hide');
  const pages = {
    Home: '/', 
    About: '/About',
    Services: '/Services',
    Contact: '/Contact'
  };
  const { pathname } = useLocation();

  const toggleNav = () => {
    const nav = document.querySelector('.header__nav');
    const btn = document.querySelector('.header__btn');
    if (toggle === 'hide') {
      nav.classList.remove('hide')
      nav.classList.add('show')
      btn.innerText = '❌'
      setToggle('show')
    } else {
      nav.classList.remove('show')
      nav.classList.add('hide')
      btn.innerText = 'MENU'
      setToggle('hide')
    }
  }

  return (
    <header className='header'>
      <div className="headerDiv">
        <img src={meksLogo} alt="vortex logo"/>
        <h1 className='title nowrap offscreen'>MEKS Accounting Services</h1>
      </div>
      <nav className="header__nav hide">
        <ul className='header__ul none'>
          {Object.entries(pages).map(([page, to]) => {
            if (page === 'Home') {
              return (
                <Link to='/' key={page} className={pathname === to ? "active yes none" : 'none'}>
                  <li className="header__li" onClick={toggleNav}>{page}</li>
                </Link>
              );
            } else {
              return (
                <Link to={`/${page}`} key={page} className={pathname === to ? "active yes none" : 'none'}>
                  <li className="header__li" onClick={toggleNav}>{page}</li>
                </Link>
              );
            }
          })}
        </ul>
      </nav>
      <button className="header__btn active yes" onClick={toggleNav}>menu</button>
    </header>
  )
}

export const Footer = () => {
  const pages = {
    Home: '/', 
    About: '/About',
    Services: '/Services',
    Contact: '/Contact'
  };
  const { pathname } = useLocation();

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <figure className="footer__figure">
        <img src={meksLogo} alt="Vortex Logo" width="500" height="200" title="Vortex Security Concepts" />
      </figure>
      <ol className="footer__ul none">
        <li className="flex-grow">
          <h2 className="footer__h2 nowrap">MEKS Accounting</h2>
          <p className="footer__p">We boost a team of skilled and qualified professionals ready accuracy, integrity, and growth at every step. <br /> Trusted financial guidance for businesses and individuals.</p>
          <Socials />
        </li>
        <li>
          <ul className="none">
            <li><h3 className="footer__h3 nowrap">Useful Links</h3></li>
            {Object.entries(pages).map(([page, to]) => {
              if (page === 'Home') {
                return (
                  <Link to='/' key={page} className={pathname === to ? "active yes none" : 'none'}>
                    <li className="header__li">{page}</li>
                  </Link>
                );
              } else {
                return (
                  <Link to={`/${page}`} key={page} className={pathname === to ? "active yes none" : 'none'}>
                    <li className="header__li">{page}</li>
                  </Link>
                );
              }
            })}
          </ul>
        </li>         
      </ol>
      <p className="footer__p center"><a href="tel:+447438155154">Call Us</a></p>
      <p className="footer__P center">Email: <a href="mailto:info@meksaccountingservices.com">info@meksaccountingservices.com</a></p>
      <p className="footer__P center">Copyrights &copy; {year} Meks Accounting Services | <Link to="/Privacy">Privacy Policy</Link> | <Link to="/Terms">Terms & Conditions</Link> </p>
    </footer>
  )
}

