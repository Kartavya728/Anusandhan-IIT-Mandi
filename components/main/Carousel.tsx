'use client';

import React, { useEffect, useRef, useState } from 'react';
// Import the CSS file directly. Ensure style.css is in the same directory.
import './style.css';

import "@/public/Images/c8.jpg";
import Image from 'next/image';

// --- NEW: Custom Hook to detect screen size ---
// This hook returns `true` if the media query matches, `false` otherwise.
const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // Ensure this code only runs on the client, where `window` is available
        const media = window.matchMedia(query);
        
        // Update state if the media query match status changes
        const listener = () => {
            setMatches(media.matches);
        };
        
        // Set the initial state
        listener();

        // Add event listener for changes
        media.addEventListener('change', listener);

        // Cleanup: remove the event listener when the component unmounts
        return () => media.removeEventListener('change', listener);
    }, [query]); // Re-run effect if the query string changes

    return matches;
};


const Carousel: React.FC = () => {
    // --- NEW: Use the hook to check for mobile viewport ---
    const isMobile = useMediaQuery('(max-width: 768px)');

    // Create refs to access DOM elements like in vanilla JS
    const carouselRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const thumbnailBorderRef = useRef<HTMLDivElement>(null);
    const nextBtnRef = useRef<HTMLButtonElement>(null); // Ref for the next button for auto-play

    // Refs to store timeout IDs so they can be cleared properly
    const runTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const runNextAutoRef = useRef<NodeJS.Timeout | null>(null);

    // Constants from your original JS
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    // Replicate the showSlider function using refs
    const showSlider = (type: 'next' | 'prev') => {
        const sliderElement = sliderRef.current;
        const thumbnailBorderElement = thumbnailBorderRef.current;
        const carouselElement = carouselRef.current;

        // Guard clauses in case refs are not yet assigned
        if (!sliderElement || !thumbnailBorderElement || !carouselElement) {
            console.error("Carousel elements not found");
            return;
        }

        const sliderItems = sliderElement.querySelectorAll<HTMLDivElement>('.list .item');
        const thumbnailItems = thumbnailBorderElement.querySelectorAll<HTMLDivElement>('.thumbnail .item');

        if (sliderItems.length === 0 || thumbnailItems.length === 0) return; // Avoid errors if no items

        if (type === 'next') {
            sliderElement.appendChild(sliderItems[0]);
            thumbnailBorderElement.appendChild(thumbnailItems[0]);
            carouselElement.classList.add('next');
        } else {
            // Prepend the last item
            sliderElement.prepend(sliderItems[sliderItems.length - 1]);
            thumbnailBorderElement.prepend(thumbnailItems[thumbnailItems.length - 1]);
            carouselElement.classList.add('prev');
        }

        // Clear the previous timeout for class removal
        if (runTimeoutRef.current) {
            clearTimeout(runTimeoutRef.current);
        }
        // Set timeout to remove the animation class
        runTimeoutRef.current = setTimeout(() => {
            carouselElement.classList.remove('next');
            carouselElement.classList.remove('prev');
        }, timeRunning);

        // Clear the previous auto-next timeout and set a new one
        if (runNextAutoRef.current) {
            clearTimeout(runNextAutoRef.current);
        }
        runNextAutoRef.current = setTimeout(() => {
            // Programmatically click the next button ref instead of document.getElementById
            nextBtnRef.current?.click();
        }, timeAutoNext);
    };

    // Define click handlers for buttons
    const handleNextClick = () => {
        showSlider('next');
    };

    const handlePrevClick = () => {
        showSlider('prev');
    };

    // useEffect runs after the component mounts, similar to DOMContentLoaded
    useEffect(() => {
        const nextButtonElement = nextBtnRef.current; // Use the ref
        if (!nextButtonElement) return;

        // --- FIXED ---
        // The original code had a block here that moved only the first thumbnail.
        // This logic was flawed because it caused the main slider and the thumbnail list
        // to become desynchronized. It has been removed. Now, both lists start in a
        // perfectly synchronized state, and every animation keeps them that way.

        // Start the initial auto next timeout
        if (runNextAutoRef.current) clearTimeout(runNextAutoRef.current); // Clear just in case
        runNextAutoRef.current = setTimeout(() => {
            nextButtonElement.click(); // Trigger initial auto-slide
        }, timeAutoNext);

        // Cleanup function: This runs when the component unmounts
        return () => {
            if (runTimeoutRef.current) {
                clearTimeout(runTimeoutRef.current);
            }
            if (runNextAutoRef.current) {
                clearTimeout(runNextAutoRef.current);
            }
        };
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <> {/* Using Fragment to avoid adding an unnecessary div */}

            {/* Assign refs to the corresponding elements */}
            <div className="carousel" ref={carouselRef} id="top">
                {/* list item */}
                <div className="list" ref={sliderRef}>
                    {/* Item 1 */}
                    <div className="item">
                        {isMobile ? (
                            <Image src="/Images/mob77.jpg" alt="slidermob1" width={600} height={600} priority />
                        ) : (
                            <Image src="/Images/image7.png" alt="slider1" width={600} height={600} priority />
                        )}
                        <div className="content">
                            {/* Content for this slide can go here if needed */}
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="item">
                        <Image src="/Images/c2.jpg" alt="Paper Presentation" width={600} height={600} />
                        <div className="content">
                            <div className="author">IIT Mandi</div>
                            <div className="title">Paper Presentation</div>
                            <div className="topic">by ANUSANDHAN</div>
                            <div className="des">
                                Showcase your research findings and innovative ideas through paper presentations.
                            </div>
                            <div className="buttons">
                                <button>Locate</button>
                                <button>Registration</button>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="item">
                        <Image src="/Images/image4.jpeg.jpg" alt="Poster Presentation" width={600} height={600} />
                        <div className="content">
                            <div className="author">IIT Mandi</div>
                            <div className="title">Poster Presentation</div>
                            <div className="topic">by ANUSANDHAN</div>
                            <div className="des">
                                Create visually appealing posters to present your research projects.
                            </div>
                            <div className="buttons">
                                <button>Locate</button>
                                <button>Registration</button>
                            </div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="item">
                        <Image src="/Images/c4.jpg" alt="Panel Discussion" width={600} height={600} />
                        <div className="content">
                            <div className="author">IIT Mandi</div>
                            <div className="title">Panel Discussion</div>
                            <div className="topic"> by ANUSANDHAN</div>
                            <div className="des">
                                Engage in insightful discussions with industry experts and scholars on various topics
                            </div>
                            <div className="buttons">
                                <button>Locate</button>
                                <button>Registration</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* --- FIXED: list thumbnail --- */}
                {/* The number and order of thumbnails now perfectly match the main slides. */}
                <div className="thumbnail" ref={thumbnailBorderRef}>
                    {/* Thumbnail 1 (matches main slide 2) */}
                    <div className="item">
                        <Image src="/Images/c2.jpg" alt="thumbnail1" width={150} height={220} />
                        <div className="content"></div>
                    </div>
                    {/* Thumbnail 2 (matches main slide 2) */}
                    <div className="item">
                        <Image src="/Images/image4.jpeg.jpg" alt="thumbnail2" width={150} height={220} />
                        <div className="content"></div>
                    </div>
                    {/* Thumbnail 3 (matches main slide 3) */}
                    <div className="item">
                        <Image src="/Images/c4.jpg" alt="thumbnail3" width={150} height={220} />
                        <div className="content"></div>
                    </div>
                    {/* Thumbnail 4 (matches main slide 4) */}
                    <div className="item">
                        <Image src="/Images/image7.png" alt="thumbnail4" width={150} height={220} />
                        <div className="content"></div>
                    </div>
                </div>

                <div
                    className="arrows"
                    style={{
                        transform: 'translateY(100%)',
                    }}
                >
                    <button
                        id="prev"
                        onClick={handlePrevClick}
                        style={{
                            background: 'rgba(0, 0, 0, 0.8)',
                            border: 'none',
                            color: 'white',
                            borderRadius: '50%',
                        }}
                    >
                        &lt;
                    </button>
                    <button
                        id="next"
                        onClick={handleNextClick}
                        ref={nextBtnRef}
                        style={{
                            background: 'rgba(0, 0, 0, 0.8)',
                            border: 'none',
                            color: 'white',
                            borderRadius: '50%',
                        }}
                    >
                        &gt;
                    </button>
                </div>

                {/* time running */}
                <div className="time"></div>
            </div>
        </>
    );
};

export default Carousel;