import React, { useState, useEffect } from "react";
import useInterval from "../../../utilities/useInterval";
import "../shared.css";

const Slider = ({ content }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const navigateToSlide = (event) => {
    const _selectedSlide = event.target.dataset.target;
    setSlideIndex(_selectedSlide);
  };
  const navigateSlide = (_direction) => {
    const _container = document.getElementById("slider-container");

    if (slideIndex <= content.length - 1 && slideIndex >= 0) {
      if (_direction === "right" && slideIndex < content.length - 1) {
        // document.getElementById("slide" + (slideIndex + 1)).scrollIntoView();
        _container.scroll({
          left: _container.offsetWidth * (slideIndex + 1),
          behavior: "smooth",
        });
        setSlideIndex(slideIndex + 1);
      } else if (_direction === "left" && slideIndex !== 0) {
        _container.scrollLeft =
          slideIndex !== 1 ? _container.offsetWidth * (slideIndex - 1) : 0;
        setSlideIndex(slideIndex - 1);
      } else {
        _container.scrollLeft = 0;
        setSlideIndex(0);
      }
      return;
    }
    _container.scrollLeft = 0;
    setSlideIndex(0);
  };

  const changeSlide = (event) => {
    const _direction = event.target.dataset.target;
    const _container = document.getElementById("slider-container");
    navigateSlide(_direction);
  };
  useInterval(() => navigateSlide("right"), 5000);

  return (
    <section className="slider-section ">
      <span
        className="left-slider-button"
        data-target="left"
        onClick={changeSlide}
      ></span>
      <div className="slider-container" id="slider-container">
        {content.map((_slide, _index) => (
          <div
            className="slide"
            key={_index}
            data-index={_index}
            id={"slide" + _index}
          >
            <img className="slide-image" src={_slide.image} alt="" />
            <div className="slider-footer"></div>
          </div>
        ))}
      </div>
      <div className="slideshow-buttons">
        {content.map((slidebtn, index) => (
          <svg
            className="slideshow-button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-target={index}
            onClick={navigateToSlide}
            key={slidebtn.title}
            style={{ borderRadius: "50%" }}
          >
            <circle
              fill={index === slideIndex ? "var(--orange)" : "#fff"}
              stroke={index === slideIndex ? "#fff" : ""}
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
              data-target={index}
              cx="8"
              cy="8"
              r="8"
            />
          </svg>
        ))}
      </div>
      <span
        className="right-slider-button"
        data-target="right"
        onClick={changeSlide}
      ></span>
    </section>
  );
};
export default Slider;
