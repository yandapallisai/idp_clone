import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import mainLogo from '../Assets/Main-log.png';
import {FaBars} from "react-icons/fa";
const Header = () => {
  // State to manage the visibility of the dropdowns
  const [isFindUsOpen, setIsFindUsOpen] = useState(false);
  const [isFindACourseOpen, setIsFindACourseOpen] = useState(false);
  const [isStudyAbroadStepsOpen, setIsStudyAbroadStepsOpen] = useState(false);
  const [isStudyDestinationsOpen, setIsStudyDestinationsOpen] = useState(false);
  const [isIELTSOpen, setIsIELTSOpen] = useState(false);
  const [isStudentEssentialsOpen, setIsStudentEssentialsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for the timers
  const findUsTimeoutRef = useRef(null);
  const findACourseTimeoutRef = useRef(null);
  const studyAbroadStepsTimeoutRef = useRef(null);
  const studyDestinationsTimeoutRef = useRef(null);
  const ieltsTimeoutRef = useRef(null);
  const studentEssentialsTimeoutRef = useRef(null);

  // Functions to handle hover events for "Find us" dropdown
  const handleFindUsEnter = () => {
    clearTimeout(findUsTimeoutRef.current);
    setIsFindUsOpen(true);
  };

  const handleFindUsLeave = () => {
    findUsTimeoutRef.current = setTimeout(() => {
      setIsFindUsOpen(false);
    }, 200); // 200ms delay
  };

  // Functions to handle hover events for "Find a course" dropdown
  const handleFindACourseEnter = () => {
    clearTimeout(findACourseTimeoutRef.current);
    setIsFindACourseOpen(true);
  };

  const handleFindACourseLeave = () => {
    findACourseTimeoutRef.current = setTimeout(() => {
      setIsFindACourseOpen(false);
    }, 200); // 200ms delay
  };

  // Functions to handle hover events for "Study abroad steps" dropdown
  const handleStudyAbroadStepsEnter = () => {
    clearTimeout(studyAbroadStepsTimeoutRef.current);
    setIsStudyAbroadStepsOpen(true);
  };

  const handleStudyAbroadStepsLeave = () => {
    studyAbroadStepsTimeoutRef.current = setTimeout(() => {
      setIsStudyAbroadStepsOpen(false);
    }, 200); // 200ms delay
  };

  // Functions to handle hover events for "Study destinations" dropdown
  const handleStudyDestinationsEnter = () => {
    clearTimeout(studyDestinationsTimeoutRef.current);
    setIsStudyDestinationsOpen(true);
  };

  const handleStudyDestinationsLeave = () => {
    studyDestinationsTimeoutRef.current = setTimeout(() => {
      setIsStudyDestinationsOpen(false);
    }, 200); // 200ms delay
  };

  // Functions to handle hover events for "IELTS" dropdown
  const handleIELTSEnter = () => {
    clearTimeout(ieltsTimeoutRef.current);
    setIsIELTSOpen(true);
  };

  const handleIELTSLeave = () => {
    ieltsTimeoutRef.current = setTimeout(() => {
      setIsIELTSOpen(false);
    }, 200); // 200ms delay
  };

  // Functions to handle hover events for "Student Essentials" dropdown
  const handleStudentEssentialsEnter = () => {
    clearTimeout(studentEssentialsTimeoutRef.current);
    setIsStudentEssentialsOpen(true);
  };

  const handleStudentEssentialsLeave = () => {
    studentEssentialsTimeoutRef.current = setTimeout(() => {
      setIsStudentEssentialsOpen(false);
    }, 200); // 200ms delay
  };
 
  // Cleanup timers on component unmount
  useEffect(() => {
    return () => {
      clearTimeout(findUsTimeoutRef.current);
      clearTimeout(findACourseTimeoutRef.current);
      clearTimeout(studyAbroadStepsTimeoutRef.current);
      clearTimeout(studyDestinationsTimeoutRef.current);
      clearTimeout(ieltsTimeoutRef.current);
      clearTimeout(studentEssentialsTimeoutRef.current);
    };
  }, []);

  return (
    <div className="bg-[#E7F3FF] min-h-screen font-sans">
      
      {/* Top Header */}
      <nav className="top-header">
        <div className="top-header-content">
          <a href="#">News and articles</a>
          <div>|</div>
          <a href="#">Events</a>
          <div>|</div>
          
          {/* Dropdown for Find Us */}
          <div
            className={`dropdown ${isFindUsOpen ? 'open' : ''}`}
            onMouseEnter={handleFindUsEnter}
            onMouseLeave={handleFindUsLeave}
          >
            <a href="#">Find us</a>
            <svg className={`dropdown-icon ${isFindUsOpen ? 'open' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
            <div className="dropdown-content">
              <a href="#">Our Offices</a>
              <a href="#">Events</a>
              <a href="#">Virtual Counselling</a>
            </div>
          </div>
          
          <div>|</div>

          {/* Dropdown for Language Selector */}
          <div className="dropdown">
            <a href="#">English</a>
            <svg className="dropdown-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
            <div className="dropdown-content">
              <a href="#">العربية</a>
              <a href="#">English</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Header */}
      <nav className="second-header">
        <div className="second-header-content">
            <div className="nav-links-and-logo">
                <div className="logo-section">
                    <span className="logo-svg-container">
                        <img src={mainLogo} alt="Company Logo" />
                    </span>
                    
                </div>

                
                {/* Dropdown for Study abroad steps */}
                <div 
                  className={`dropdown ${isStudyAbroadStepsOpen ? 'open' : ''}`}
                  onMouseEnter={handleStudyAbroadStepsEnter}
                  onMouseLeave={handleStudyAbroadStepsLeave}
                >

                  
                    <a href="#">Study abroad steps</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Choose a course</a>
                        <a href="#">Choose a country</a>
                        <a href="#">Apply to a university</a>
                        <a href="#">Meet your counsellor</a>
                    </div>
                </div>

                {/* Dropdown for Study destinations */}
                <div 
                  className={`dropdown ${isStudyDestinationsOpen ? 'open' : ''}`}
                  onMouseEnter={handleStudyDestinationsEnter}
                  onMouseLeave={handleStudyDestinationsLeave}
                >
                    <a href="#">Study destinations</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Australia</a>
                        <a href="#">Canada</a>
                        <a href="#">USA</a>
                        <a href="#">UK</a>
                        <a href="#">New Zealand</a>
                    </div>
                </div>
                
                {/* Dropdown for Find a course */}
                <div 
                  className={`dropdown ${isFindACourseOpen ? 'open' : ''}`}
                  onMouseEnter={handleFindACourseEnter}
                  onMouseLeave={handleFindACourseLeave}
                >
                    <a href="#">Find a course</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Postgraduate Degrees</a>
                        <a href="#">Undergraduate Degrees</a>
                        <a href="#">Pathway Courses</a>
                        <a href="#">Vocational Courses</a>
                    </div>
                </div>

                {/* Dropdown for IELTS */}
                <div 
                  className={`dropdown ${isIELTSOpen ? 'open' : ''}`}
                  onMouseEnter={handleIELTSEnter}
                  onMouseLeave={handleIELTSLeave}
                >
                    <a href="#">IELTS</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Book your IELTS test</a>
                        <a href="#">IELTS online</a>
                        <a href="#">Prepare for your test</a>
                        <a href="#">IELTS results</a>
                    </div>
                </div>

                {/* Dropdown for Student Essentials */}
                <div 
                  className={`dropdown ${isStudentEssentialsOpen ? 'open' : ''}`}
                  onMouseEnter={handleStudentEssentialsEnter}
                  onMouseLeave={handleStudentEssentialsLeave}
                >
                    <a href="#">Student Essentials</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Accommodation</a>
                        <a href="#">Student visa</a>
                        <a href="#">Health cover</a>
                        <a href="#">Student stories</a>
                    </div>
                </div>
            </div>
            
            <div className="action-buttons">
                <button className="counselling-btn">
                    Avail FREE counselling
                </button>
                <button className="signin-btn">
                    Sign in
                </button>
                <a href="#" className="favorite-icon">
                    <svg className="favorite-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-.318-.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </a>
            </div>

            {/* Mobile toggle aligned to the right on the same row */}
            <button
              className="mobile-toggle"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars/>
            </button>
        </div>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div 
                  className={`dropdown ${isStudyAbroadStepsOpen ? 'open' : ''}`}
                  onMouseEnter={handleStudyAbroadStepsEnter}
                  onMouseLeave={handleStudyAbroadStepsLeave}
                >

                  
                    <a href="#">Study abroad steps</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Choose a course</a>
                        <a href="#">Choose a country</a>
                        <a href="#">Apply to a university</a>
                        <a href="#">Meet your counsellor</a>
                    </div>
                </div>


          <div 
                  className={`dropdown ${isStudyDestinationsOpen ? 'open' : ''}`}
                  onMouseEnter={handleStudyDestinationsEnter}
                  onMouseLeave={handleStudyDestinationsLeave}
                >
                    <a href="#">Study destinations</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Australia</a>
                        <a href="#">Canada</a>
                        <a href="#">USA</a>
                        <a href="#">UK</a>
                        <a href="#">New Zealand</a>
                    </div>
                </div>


           <div 
                  className={`dropdown ${isFindACourseOpen ? 'open' : ''}`}
                  onMouseEnter={handleFindACourseEnter}
                  onMouseLeave={handleFindACourseLeave}
                >
                    <a href="#">Find a course</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Postgraduate Degrees</a>
                        <a href="#">Undergraduate Degrees</a>
                        <a href="#">Pathway Courses</a>
                        <a href="#">Vocational Courses</a>
                    </div>
                </div>


         <div 
                  className={`dropdown ${isIELTSOpen ? 'open' : ''}`}
                  onMouseEnter={handleIELTSEnter}
                  onMouseLeave={handleIELTSLeave}
                >
                    <a href="#">IELTS</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Book your IELTS test</a>
                        <a href="#">IELTS online</a>
                        <a href="#">Prepare for your test</a>
                        <a href="#">IELTS results</a>
                    </div>
                </div>



           <div 
                  className={`dropdown ${isStudentEssentialsOpen ? 'open' : ''}`}
                  onMouseEnter={handleStudentEssentialsEnter}
                  onMouseLeave={handleStudentEssentialsLeave}
                >
                    <a href="#">Student Essentials</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Accommodation</a>
                        <a href="#">Student visa</a>
                        <a href="#">Health cover</a>
                        <a href="#">Student stories</a>
                    </div>
                </div>

        </div>
      </nav>
      
      
    </div>
  );
};

export default Header;
