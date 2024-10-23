import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5); // Start with 5 for larger screens

  // Dynamically adjust itemsToShow based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1); // Show 1 image on mobile
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3); // Show 3 images on tablets
      } else {
        setItemsToShow(5); // Show 5 images on larger screens
      }
    };

    window.addEventListener("resize", updateItemsToShow);
    updateItemsToShow(); // Set initial value on load

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = images.length - itemsToShow;
      return Math.min(prevIndex + 1, maxIndex);
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="carousel-container relative" {...swipeHandlers}>
        <div className="carousel-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              width: `${100 * Math.ceil(images.length / itemsToShow)}%`,
            }}
          >
            {images.map((image, index) => (
              <div className="carousel-item" key={index}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0  flex justify-center space-x-1 mt-3">
        <button
          className="carousel-button prev bg-transparent text-white py-2 px-2 rounded-full border-white border flex items-center justify-center"
          onClick={handlePrev}
          aria-label="Previous Slide"
          disabled={currentIndex === 0}
        >
          <span className="material-icons text-white text-[16px]">
            arrow_back
          </span>
        </button>

        <button
          className="carousel-button prev bg-transparent text-white py-2 px-2 rounded-full border-white border flex items-center justify-center"
          onClick={handleNext}
          aria-label="Next Slide"
          disabled={currentIndex >= images.length - itemsToShow}
        >
          <span className="material-icons text-white text-[16px]">
            arrow_forward
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
