import React from 'react';

const tempStyles= {
  width: '100px',
}

const goHome = () => {
  var loc = window.location.href.split('/')
  loc.pop()
  loc = loc.join('/')

  location.assign(loc + '/home')
}

const Logo = () => {
  return (
    <img
      onClick={goHome}
      style={tempStyles}
      src='logo_ex.png'
    />
  );
}

export default Logo;