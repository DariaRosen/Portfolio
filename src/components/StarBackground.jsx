import { useEffect, useState } from "react";

// StarBackground Component:
// Renders a dynamic starry sky with floating stars and moving meteors.

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    // useEffect runs once on component mount
    useEffect(() => {
        generateStars();  // Create initial stars
        generateMeteors(); // Create initial meteors

        // Re-generate stars when the window is resized
        const handleResize = () => {
            generateStars();
        };

        // Add resize listener
        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to generate stars based on screen size
    const generateStars = () => {
        // The number of stars depends on screen area
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,                                  // Unique ID for React key
                size: Math.random() * 3 + 1,           // Random size between 1px and 4px
                x: Math.random() * 100,                // Random horizontal position (%)
                y: Math.random() * 100,                // Random vertical position (%)
                opacity: Math.random() * 0.5 + 0.5,    // Random opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, // Random duration for subtle pulsing animation
            });
        }

        // Update the stars state
        setStars(newStars);
    };

    // Function to generate a few meteors
    const generateMeteors = () => {
        const numberOfMeteors = 5; // Fixed number of meteors
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,                                  // Unique ID
                size: Math.random() * 2 + 1,           // Random length/size multiplier
                x: Math.random() * 100,                // Starting horizontal position (%)
                y: Math.random() * 20,                 // Starting vertical position near top (%)
                delay: Math.random() * 15,             // Random delay before animation starts
                animationDuration: Math.random() * 3 + 3, // Random animation duration
            });
        }

        // Update the meteors state
        setMeteors(newMeteors);
    };

    // Render stars and meteors
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}                    // Unique key for React
                    className="star animate-pulse-subtle" // Tailwind class for pulsing
                    style={{
                        width: star.size + "px",     // Set width
                        height: star.size + "px",    // Set height
                        left: star.x + "%",          // Position left
                        top: star.y + "%",           // Position top
                        opacity: star.opacity,       // Set opacity
                        animationDuration: star.animationDuration + "s", // Set animation duration
                    }}
                />
            ))}

            {/* Meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}                 // Unique key for React
                    className="meteor animate-meteor" // Tailwind class for meteor animation
                    style={{
                        width: meteor.size * 40 + "px",  // Meteor length (scaled)
                        height: meteor.size * 1 + "px",  // Meteor thickness
                        left: meteor.x + "%",            // Start horizontal position
                        top: meteor.y + "%",             // Start vertical position
                        animationDelay: meteor.delay + "s", // Delay before animation starts
                        animationDuration: meteor.animationDuration + "s", // Duration of meteor animation
                    }}
                />
            ))}
        </div>
    );
};
