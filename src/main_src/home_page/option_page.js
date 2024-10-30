import React from 'react';
import './option_page.css';
import Imageposition from '../home_page/imageposition/image_position';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Usernamewithimage from './user_name/user_name';
import Headercom from '../components/header';


const OptionPage = () => {
  return (
    <div className="main_container">
        
      <div className="container_position">
        <div className="content">
          <p>
          <Link to="/about" className="link">About /.</Link> {/* Link to AboutSkillPart page */}
          </p>
          <p> <Link to="/Project" className="link">Project View /.</Link></p>
          <p>Experiences /.</p>
          <p><Link to="/resume" className="link">Resume /. </Link></p>
        </div>
      </div>

      <Usernamewithimage />
      <Imageposition />
    </div>
  );
}

export default OptionPage;
