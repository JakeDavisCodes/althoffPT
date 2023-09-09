import React from 'react';
import Logo from './header-comp/Logo.jsx'
import Hamburger from './header-comp/Hamburger.jsx'

const pages = [
  {
    name: 'Home',
    href: '/home'
  },
  {
    name: 'Method',
    href: '/method'
  },
  {
    name: 'Services',
    href: '/services'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
]

const Header = () => {
  return (
    <div id="header">
      <Logo />
      <Hamburger pages={pages}/>
    </div>
  );
}

export default Header;