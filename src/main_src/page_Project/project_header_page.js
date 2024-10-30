import React, { useState } from 'react';
import './project_header_page.css'; // Import your CSS file for styling
import LaptopSVG from '../images/devpjtimage.svg';
import LaptopSVG1 from '../images/devpjtimage.svg';
import LaptopSVG2 from '../images/devpjtimage.svg';
import LaptopSVG3 from '../images/devpjtimage.svg';
import LaptopSVG22 from '../images/devpjtimage.svg';
import LaptopSVG24 from '../images/mobilefast.svg';
import LaptopSVG23 from '../images/adminfastpjtimage.svg';
import LaptopSVG27 from '../images/ekyc.svg';
import Imageproject from './project_image_content/project_image';
import Headercom from '../components/header';

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc, imageAlt) => {
    setSelectedImage({ selectedSrc: imageSrc, selectedAlt: imageAlt });
  };

  return (
    <>
      <Headercom />
      <Imageproject/>  
    <div className="Project_main_container">
      <div className="left_container">
        <div className="left_sidebar">
          <div className="sidebar">
            <img src={LaptopSVG} className="optionimageproject" alt="Option 1" onClick={() => handleImageClick(LaptopSVG22, 'selected option 1')} />
            <img src={LaptopSVG1} className="optionimageproject" alt="Option 2" onClick={() => handleImageClick(LaptopSVG24, 'selected option 2')} />
            <img src={LaptopSVG2} className="optionimageproject" alt="Option 3" onClick={() => handleImageClick(LaptopSVG23, 'selected option 3')} />
            <img src={LaptopSVG3} className="optionimageproject" alt="Option 4" onClick={() => handleImageClick(LaptopSVG27, 'selected option 4')} />
          </div>
        </div>
        <div className="center_content">
          {selectedImage ? (
            <img
              src={selectedImage.selectedSrc}
              className="optionimageproject_center_content"
              alt={selectedImage.selectedAlt}
            />
          ) : (
            <div>Select an option</div>
          )}
        </div>
      </div>
    
    </div>
 

    </>
  );
}

export default Project;
