import React from 'react';
import Menu from './Menu.jsx';

const Hamburger = ({pages}) => {
  return (
    <div id="hamburger">
      <label>
        <input type="checkbox"/>
        <span class="menu"> <span class="hamburger"></span></span>
        <Menu pages={pages} />
      </label>
    </div>
  );
}

export default Hamburger;
