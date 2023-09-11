import React from 'react';

const tempStyles= {
  width: '100px',
}

const goHome = () => {
  const loc = window.location.href.split('/').pop().join('/')

  alert(loc)
  console.log(loc)
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