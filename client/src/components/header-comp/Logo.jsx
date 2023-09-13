import React from 'react';

const goHome = () => {
  var loc = window.location.href.split('/')
  loc.pop()
  loc = loc.join('/')

  location.assign(loc + '/home')
}

const Logo = () => {
  return (
    <img
      id="logo"
      onClick={goHome}
      src='logo_ex.png'
    />
  );
}

export default Logo;