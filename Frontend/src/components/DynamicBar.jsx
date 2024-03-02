import React from 'react';
import { useState, useEffect } from 'react';

const DynamicBar = ({ numConductedSeminars }) => {

    const [isSmScreen, setIsSmScreen] = useState(false);

    const width = Math.min(numConductedSeminars, 50) * 10; // Scale value to max width of 500px
    const mobileWidth = Math.min(numConductedSeminars, 20) * 10;

    useEffect(() => {
        const handleResize = () => {
            setIsSmScreen(window.innerWidth < 768); // Adjust breakpoint as needed
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Call initially for accurate state

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className={`relative h-6 rounded-r-lg bg-blue-500 shadow-md mb-4`}
            style={{ 
                width: isSmScreen ? `${mobileWidth}px` : `${width}px`,
            }}
        >
            <span className="absolute right-0 p-1 text-xs font-bold text-white">
                {isSmScreen ? (numConductedSeminars > 20 ? "20+" : numConductedSeminars) : (numConductedSeminars > 50 ? "50+" : numConductedSeminars)}
            </span>
        </div>
    );
};

export default DynamicBar;