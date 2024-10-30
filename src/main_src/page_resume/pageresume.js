import React from 'react';
import './pageresume.css';
import Headercom from '../components/header';
import { ReactComponent as ResumeSVG } from '../images/Resumesvg.svg'; // Ensure the correct import path

const Resume = () => {
  return (
    <>
      <Headercom />
      <div className="resume-page">
        {/* Lines for the sides */}
        <div className="line left"></div>
        <div className="line right"></div>

        {/* Title above the center container */}
        <div className="title">Resume</div>

        <div className="center-container">
          <div className="resume-svg">
            <ResumeSVG /> {/* Render the SVG here */}
          </div>
        </div>

        <div className="download-resume">
          Download Resume /.
          <span className="underline"></span> {/* Separate underline */}
        </div>
      </div>

      
    </>
  );
};

export default Resume;
