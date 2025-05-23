'use client';

import React, { useEffect, useRef } from 'react';
// Import the CSS file directly. Ensure style.css is in the same directory.
import './style.css';

import "@/public/Images/c8.jpg";
import Image from 'next/image';

const Carousel: React.FC = () => {
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
        const thumbnailBorderElement = thumbnailBorderRef.current;
        const nextButtonElement = nextBtnRef.current; // Use the ref

        if (!thumbnailBorderElement || !nextButtonElement) return;

        // Initial setup: Append the first thumbnail item to the end
        const thumbnailItems = thumbnailBorderElement.querySelectorAll<HTMLDivElement>('.thumbnail .item');
        if (thumbnailItems.length > 0) {
             // Check if it hasn't already been moved (e.g., during development hot reload)
             if (thumbnailBorderElement.firstChild === thumbnailItems[0]) {
                thumbnailBorderElement.appendChild(thumbnailItems[0]);
            }
        }

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
                    {/* NOTE: Ensure image paths start with '/' and point to files in the 'public' directory */}
                    <div className="item">
                        <Image src="/Images/image7.png" alt="slider1" width={600} height={600} />
                        <div className="content">

                        </div>
                    </div>
                    <div className="item">
                    <Image src="/Images/c2.jpg" alt="slider1" width={600} height={600} />
                        <div className="content">
                            <div className="author">IIT Mandi</div>
                            <div className="title">Paper Presentaion</div>
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
                    <div className="item">
                    <Image src="/Images/image4.jpeg.jpg" alt="slider1" width={600} height={600} />
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
                    <div className="item">
                    <Image src="/Images/c4.jpg" alt="slider1" width={600} height={600} />
                        <div className="content">
                            <div className="author">IIT Mandi</div>
                            <div className="title">Panel Disscusion</div>
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
                {/* list thumbnail */}
                <div className="thumbnail" ref={thumbnailBorderRef}>
                    <div className="item">
                    <Image src="/Images/c4.jpg" alt="slider1" width={600} height={600} />
                        <div className="content">
                            <div className="title">Anusandhan1</div>
                            <div className="IIT Mandi">IIT Mandi</div>
                        </div>
                    </div>
                    <div className="item">
                    <Image src="/Images/image5.jpg" alt="slider1" width={600} height={600} />
                        <div className="content">
                            <div className="title">Anusandhan2</div>
                            <div className="IIT Mandi">IIT Mandi</div>
                        </div>
                    </div>
                    <div className="item">
                    <Image src="/Images/c2.jpg" alt="slider1" width={600} height={600} />
                        <div className="content">
                            <div className="title">Anusandhan3</div>
                            <div className="IIT Mandi">IIT Mandi</div>
                        </div>
                    </div>
                    <div className="item">
                    <Image src="/Images/image4.jpeg.jpg" alt="slider1" width={600} height={600} />
                        <div className="content">
                            <div className="title">Anusandhan4</div>
                            <div className="IIT Mandi">IIT Mandi</div>
                        </div>
                    </div>
                </div>
                {/* next prev */}
                <div className="arrows">
                    {/* Attach click handlers directly */}
                    {/* Note: The 'id' attributes are less necessary in React when using refs/handlers */}
                    <button id="prev" onClick={handlePrevClick}>  l  </button>
                    <button id="next" onClick={handleNextClick} ref={nextBtnRef}> r </button>
                </div>
                {/* time running */}
                <div className="time"></div>
            </div>
        </>
    );
};

export default Carousel;