import React, { useState } from 'react';
import Boxone from '../../images/boxone.svg';
import Boxtwo from '../../images/boxtwo.svg';
import './project_image_content.css';

const Imageproject = () => {

  return (
<>
      <div className="image-container-top-right-Imageproject">
        <img src={Boxone} className="top-right-svg-Imageproject" />
      </div>

      <div className="image-container-bottom-left-Imageproject">
        <img src={Boxtwo} className="bottom-left-svg-Imageproject" />
      </div>
    </>
      
  );
}

export default Imageproject;
