import { useEffect } from "react";
import "../CSS/Notfound.css";
import { useNavigate } from "react-router";


export default function Notfound() {
const navigate = useNavigate();
  useEffect(() => {
    // Animate elements when component mounts
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.1}s`;
      el.classList.add("animate");
    });
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="notfound-container">
      {/* Animated herbal background elements */}
      <div className="floating-herbs">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="floating-herb" style={{
            '--delay': `${i * 3}s`,
            '--duration': `${15 + Math.random() * 10}s`,
            '--size': `${20 + Math.random() * 30}px`,
            '--opacity': `${0.3 + Math.random() * 0.5}`,
            '--startX': `${Math.random() * 100}%`,
            '--startY': `${Math.random() * 100}%`
          }}></div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="notfound-content animate-on-load">
        {/* Premium decorative elements */}
        <div className="luxury-border"></div>
        <div className="ayurvedic-symbol"></div>
        
        {/* Error display */}
        <div className="error-display">
          <h1 className="error-code">404</h1>
          <div className="error-divider"></div>
          <h2 className="error-title">Sacred Page Not Found</h2>
        </div>
        
        {/* Premium home button */}
        <button 
          onClick={handleGoHome} 
          className="home-button animate-on-load"
          aria-label="Return to home"
        >
          <span className="button-text">Return to Sacred Space</span>
          <span className="button-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2L4 7v10h3v-7h10v7h3V7l-8-5zm0 2.5L18 7v3h-2V8h-3v7h-2V8H8v2H6V7l6-4.5z"/>
            </svg>
          </span>
          <span className="button-hover-effect"></span>
        </button>
      </div>
    </div>
  );
}