import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Set auto play speed (3 seconds)
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div><img src="/imgs/image1.jpg" alt="Image 1" /></div>
        <div><img src="/imgs/image2.jpg" alt="Image 2" /></div>
        <div><img src="/imgs/image3.jpg" alt="Image 3" /></div>
        <div><img src="/imgs/image4.jpg" alt="Image 3" /></div>
        {/* Add more images as needed */}
      </Slider>
      <style jsx>{`
        .slider-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          border-radius: 10px; /* Rounded corners */
          overflow: hidden; /* Hide overflow to keep corners rounded */
        }
        img {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
