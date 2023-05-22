import React, { useState, useEffect } from "react";
import "./SimpleSlider.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      author: "Chase .M",
      title: "Consultant at Adobe",
      description:
        "Ramsey is an extremely driven and reliable engineer who solves problems, asks great questions, is always willing to jump in and work towards a solution, and is dedicated to learning and improving. He was an immensely valuable asset to our team.",
    },
    {
      author: "Suzanne .W",
      title: "Sr. Product Manager",
      description:
        "Ramsey is a dedicated developer who drives himself to conquer new challenges at every turn. He is very talented at understanding a complex problem and testing new ways to approach and solve it.",
    },
    {
      author: "John .B",
      title: "Design Leader",
      description:
        "Ramsey was always available to brainstorm ideas and has an inherent collaborative nature about his approach to development. I highly recommend Ramsey.",
    },
    {
      author: "Eduardo .V",
      title: "Full Stack Engineer",
      description:
        "He is a brilliant developer and is great at problem-solving. I am happy to work alongside him and would recommend him to anyone looking for an experienced programmer.",
    },
    {
      author: "Giselle .B",
      title: "User Researcher",
      description:
        "Ramsey was always great at helping bring my designs to life and worked every step of the way with me to ensure that we created a beautiful product!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <p className="kindwords">A few testimonials...</p>
      <div className="testimonial-slider">
        <div className="testimonial-card">
          <h3>{testimonials[currentSlide].author}</h3>
          <h4>{testimonials[currentSlide].title}</h4>
          <p>{testimonials[currentSlide].description}</p>
        </div>
        <div className="slider-controls">
          {/* <button onClick={handlePrevSlide}>Prev</button>
          <button onClick={handleNextSlide}>Next</button> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
