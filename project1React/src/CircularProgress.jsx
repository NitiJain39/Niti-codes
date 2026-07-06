import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({percentText}) => {
  const [percentage, setPercentage] = useState(percentText);
  const targetPercentage = percentText; // Target percentage
  const animationDuration = 800; // Animation duration in milliseconds (2 seconds)
    const animationRef = useRef(null);

    const startAnimation = () => {
    setPercentage(0);
    let startTime;
    const animateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentageStep = (targetPercentage / animationDuration) * progress;
      
      if (progress < animationDuration) {
        setPercentage(Math.min(percentageStep, targetPercentage));
        animationRef.current = requestAnimationFrame(animateProgress);
      } else {
        setPercentage(targetPercentage);
      }
    }
    //cancel
    if (animationRef.current){
        cancelAnimationFrame(animationRef.current);
    }
    // Start the animation
    animationRef.current = requestAnimationFrame(animateProgress);
    };
    const resetAnimation =()=>{
        if(animationRef.current){
            cancelAnimationFrame(animationRef.current)
        }
        setPercentage(percentText)
    }
<div className='bg-[#7b27b0]'></div>

return (
    
    <div className="flex justify-center items-center h-24 w-24">
        <svg width="0" height="0">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="10%" stopColor="#7b27b0" /> {/* Purple-500 */}
                    <stop offset="50%" stopColor="#215ea3" /> {/* Blue */}
                    <stop offset="100%" stopColor="#603ea0" /> {/* Red */}
                </linearGradient>
            </defs>
        </svg>
        <div onMouseEnter={startAnimation} onMouseLeave={resetAnimation}
        className="cursor-pointer">
            <CircularProgressbar
                value={percentage}
                text={`${percentText}%`}
                styles={buildStyles({
                    textColor: '#ffffff', // white
                    textSize: '24px',
                    pathColor: `url(#gradient)`, // Define a gradient in an SVG and reference it here
                    trailColor: '#e5e7eb', // gray-200
                    pathTransitionDuration: 0, // Set to 0 since we're handling animation manually
                })}
                className="drop-shadow-lg"
            />
        </div>
    </div>
)};
export default CircularProgress;
