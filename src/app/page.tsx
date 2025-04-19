"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";

export default function LoveSequence() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answer, setAnswer] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Images for the sequence
  const images = [
    "/img/S__4718595_0.jpg",
    "/img/S__4718597_0.jpg",
    "/img/S__4718598_0.jpg",
    "/img/S__4718599_0.jpg",
    "/img/S__4718600_0.jpg",
  ];

  // Handle the intro animation timing
  useEffect(() => {
    if (currentStep === 1) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
        setTimeout(() => {
          setCurrentStep(2);
        }, 500);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Handle answer submission
  const handleSaveAnswer = () => {
    if (answer) {
      setCurrentStep(3);
    }
  };

  // Handle image navigation
  const handleNextImage = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setCurrentStep(4);
    }
  };

  return (
    <div className="container">
      {/* Step 1: Intro Animation */}
      {currentStep === 1 && (
        <div
          className={`intro-animation ${animationComplete ? "fade-out" : ""}`}
        >
          <div className="heart-container">
            <svg
              className="heart"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="love-text">I Love You</h1>
        </div>
      )}

      {/* Step 2: Question Prompt */}
      {currentStep === 2 && (
        <div className="question-container">
          <h2 className="question-title">Do you love me?</h2>
          <div className="options-container">
            <label className="option-label">
              <input
                type="radio"
                name="love"
                value="Love"
                onChange={(e) => setAnswer(e.target.value)}
                className="option-input"
              />
              <span className="option-text">รักมากๆๆๆ</span>
            </label>
            <label className="option-label">
              <input
                type="radio"
                name="love"
                value="Love very much"
                onChange={(e) => setAnswer(e.target.value)}
                className="option-input"
              />
              <span className="option-text">รักมากที่สุดในโลก</span>
            </label>
          </div>
          <button
            onClick={handleSaveAnswer}
            disabled={!answer}
            className={`save-button ${!answer ? "disabled" : ""}`}
          >
            Save Answer
          </button>
        </div>
      )}

      {/* Step 3: Image Sequence */}
      {currentStep === 3 && (
        <div className="image-container">
          <div className="image-counter">
            <p>
              Image {imageIndex + 1} of {images.length}
            </p>
          </div>
          <div className="image-wrapper" onClick={handleNextImage}>
            <Image
              src={images[imageIndex]}
              alt={`Love image ${imageIndex + 1}`}
              width={600}
              height={400}
              className="sequence-image"
            />
            <div className="image-overlay">
              <p className="click-text">Click to continue</p>
            </div>
          </div>
          <div className="image-dots">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`dot ${idx === imageIndex ? "active" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Final Surprise */}
      {currentStep === 4 && (
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/3mYVyVY-lU4?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-video"
            ></iframe>
          </div>
          <div className="thank-you">
            <p>Thank you for being in my life ❤️</p>
          </div>
        </div>
      )}
    </div>
  );
}
