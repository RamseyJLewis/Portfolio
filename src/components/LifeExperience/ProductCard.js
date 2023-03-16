import React from "react";
import { Card } from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = ({ image, title, author,description }) => {
  const RESUME_URL =
    "https://docs.google.com/document/d/e/2PACX-1vQ9E0qSxZ7EOVq4O_pop_LBhdkP-E7Ozrw1jmKMooVABYZlS9lvr6ErqnBeNgK_O-TsCkZsMdAncOMR/pub";
  return (
    <div class="container">
      <div class="testimonial-card">
        <div class="testimonial-text">
          <p>
         "{description}"
          </p>
        </div>
        <div class="testimonial-author">
          <img src={image} alt="author image" />
          <h3>{author}</h3>
          <br></br>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
