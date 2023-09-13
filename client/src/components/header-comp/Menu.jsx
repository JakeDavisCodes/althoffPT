import React from 'react';

const Menu = ({pages}) => {
  const phone = screen.width < screen.height

  return (
    <div id="selector" className={phone ? 'phone' : ""}>
      <span className="overlay" />
      <div>
        {pages.map((page) => <a key={page.name}href={page.href}>{page.name}</a>)}
      </div>
    </div>
  );
}

export default Menu;

