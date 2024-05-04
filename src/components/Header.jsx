import React from 'react';
import "./myStyle.css";

function Header({bgColor,textColor}) {
  const headStyle={backgroundColor:bgColor,color:textColor}
  return (
    <header style={headStyle}>
      <div className="header-buttons">
        <a href='/'><img src="IMG/home.png" width="30" alt="home"></img></a>
        <a href='profile'><img src="IMG/profile.png" width="28" alt="profile"></img></a>
        <div className="attributes">
          <a href='attributions'><img src="IMG/crown.png" width ="30" alt="attributes"></img></a>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps={
    bgColor:"lightblue",
    textColor:"black"
}

export default Header;
