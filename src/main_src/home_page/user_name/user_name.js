import React from 'react';
import './user_name.css';
import Icon from '../../images/user_image.svg'; // Adjust the path based on your project structure
import Iconside from '../../images/user_image_rightside.svg'; // Adjust the path based on your project structure
import hello from '../../images/hello.svg'; // Adjust the path based on your project structure


const Usernamewithimage = () => {
  return (
    <>
      <div className="username-container">
        <img src={Icon} alt="Icon" className="username-icon" />
        <p>Shiva Shankar S /.</p>
      </div>
      <img src={Icon} alt="Icon" className="username-icon-backside" />
      <img src={Iconside} alt="Icon" className="username-icon-backside-two" />
      <img src={hello} alt="Icon" className="username-icon-backside-three" />
    </>
  );
}

export default Usernamewithimage;
