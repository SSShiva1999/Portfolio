import React from 'react';
import './image_position.css';
import LaptopSVG from '../../images/top_left_optionpage.svg';
import LapbottomSVG from '../../images/bottom_left_optionpage.svg';

const Imageposition = () => {
  return (
    <>
      <div className="image-container-top-right">
        <img src={LaptopSVG} alt="" className="top-right-svg" />
      </div>

      <div className="image-container-bottom-left">
        <img src={LapbottomSVG} alt="" className="bottom-left-svg" />
      </div>
    </>
  );
}

export default Imageposition;
