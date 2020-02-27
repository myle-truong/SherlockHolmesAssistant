import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br-pill shadow-2"
        options={{ max: 80 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner pa2">
          <img className="img" alt="logo" src={logo} />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
