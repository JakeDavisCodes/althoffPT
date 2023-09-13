import React from 'react';
import Logo from './header-comp/Logo.jsx'
import Hamburger from './header-comp/Hamburger.jsx'

const pages = [
  {
    name: 'HOME',
    href: '/home'
  },
  {
    name: 'METHOD',
    href: '/method'
  },
  {
    name: 'SERVICES',
    href: '/services'
  },
  {
    name: 'BLOG',
    href: '/blog'
  },
  {
    name: 'CONTACT',
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