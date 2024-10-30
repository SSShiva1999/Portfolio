import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OptionPage from './main_src/home_page/option_page';
import About from './main_src/page_about/about';
import Project from './main_src/page_Project/project_header_page';
import Resume from './main_src/page_resume/pageresume';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OptionPage />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/Project" element={<Project />} /> 
          <Route path="/resume" element={<Resume />} /> 
          {/* Add more routes for other pages as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
