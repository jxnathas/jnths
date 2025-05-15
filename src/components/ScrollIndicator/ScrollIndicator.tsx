import './ScrollIndicator.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const ScrollIndicator = () => {
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let scrollTimeout: number;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Show indicators while scrolling
            setIsScrolling(true);
            
            // Clear existing timeout
            clearTimeout(scrollTimeout);
            
            // Hide indicators again after scrolling stops (1000ms delay)
            scrollTimeout = window.setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
            
            // Show scroll up if we've scrolled past the first section
            setShowScrollUp(scrollTop > windowHeight * 0.5);
            
            // Hide scroll down if we're near the bottom
            setShowScrollDown(scrollTop < documentHeight - windowHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToNext = () => {
        const windowHeight = window.innerHeight;
        const currentSection = Math.floor(window.pageYOffset / windowHeight);
        const nextSectionTop = (currentSection + 1) * windowHeight;
        
        window.scrollTo({
            top: nextSectionTop,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Scroll Down Indicator */}
            {showScrollDown && (
                <div className={`scroll-indicator scroll-down ${!isScrolling ? 'hidden' : ''}`} onClick={scrollToNext}>
                    <FaChevronDown />
                </div>
            )}

            {/* Scroll Up Indicator */}
            {showScrollUp && (
                <div className={`scroll-indicator scroll-up ${!isScrolling ? 'hidden' : ''}`} onClick={scrollToTop}>
                    <FaChevronUp />
                </div>
            )}
        </>
    );
};