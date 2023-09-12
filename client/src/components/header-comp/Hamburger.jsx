import React from 'react';
import Menu from './Menu.jsx';

const Hamburger = ({pages}) => {
  return (
    <div id="hamburger">
      <label>
        <input type="checkbox"/>
        <span className="menu"> <span className="hamburger"></span></span>
        <Menu pages={pages} />
      </label>
    </div>
  );
}

export default Hamburger;
