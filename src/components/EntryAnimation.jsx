import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

// The EntryAnimation component applies an animation to its children when they come into view.
const EntryAnimation = ({ children, animationType = 'entry-left', className = '' }) => {
  const elementRef = useRef(null); // Holds reference to the element to animate
  const [hasAnimated, setHasAnimated] = useState(false); // Tracks whether the animation has been triggered
  const location = useLocation(); // Monitors the URL changes (for resetting the animation on page change)

  // Effect to reset the animation flag when the location changes (page navigation)
  useEffect(() => {
    setHasAnimated(false); // Reset the animation state when the route changes
  }, [location]); // Runs when the route/location changes

  // Effect to set up the animation when the component is mounted and visible in the viewport
  useEffect(() => {
    const element = elementRef.current; // Access the DOM element to observe

    // Avoid re-running the animation if it has already been triggered
    if (hasAnimated) return; 

    // Add the 'entry' class initially to begin the animation
    element.classList.add('entry');

    // Create an IntersectionObserver to detect when the element is visible in the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Trigger animation when the element becomes visible and animation hasn't been done yet
        if (entry.isIntersecting && !hasAnimated) {
          entry.target.classList.add('entered', animationType); // Add animation classes

          // Cleanup after the animation finishes
          entry.target.addEventListener('animationend', () => {
            entry.target.classList.remove('entry'); // Remove the entry class after animation
            entry.target.classList.remove('entered'); // Clean up animation classes
            entry.target.style.opacity = '1'; // Ensure the element remains fully visible after animation
            setHasAnimated(true); // Mark the animation as completed
          });
        } else if (!entry.isIntersecting) {
          // Set opacity to 0 if the element is not in view
          entry.target.style.opacity = '0';
        }
      });
    }, { threshold: 0.5 }); // Trigger when at least 50% of the element is in view

    // Start observing the element for visibility changes
    observer.observe(element);

    // Cleanup the observer when the component unmounts or updates
    return () => observer.disconnect(); 
  }, [animationType, location, hasAnimated]); // Re-run effect when animationType, location, or hasAnimated changes

  return (
    <div ref={elementRef} className={`${className}`}>
      {children} {/* Render the content of the component */}
    </div>
  );
};

export default EntryAnimation;
