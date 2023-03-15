import React from "react";
import { Card } from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = ({ image, title, description }) => {
  const RESUME_URL =
    "https://docs.google.com/document/d/e/2PACX-1vQ9E0qSxZ7EOVq4O_pop_LBhdkP-E7Ozrw1jmKMooVABYZlS9lvr6ErqnBeNgK_O-TsCkZsMdAncOMR/pub";
  return (
    // <Card>
    //   <Card.Img variant="top" src={image} />
    //   <Card.Body>
    // <Card.Title>{title}</Card.Title>
    //     <Card.Text>{description}</Card.Text>
    //   </Card.Body>
    // </Card>
    <div class="container">
      <div class="card">
        <div class="imgBx">
          <img src={image} />
        </div>
        <div class="contentBx">
          <p class="price">
          <h3>{title}</h3>

          </p>
          <div class="color">
          <i class="fa fa-rupee-sign"></i> {description}

            <br></br>
            <br></br>
            <br></br>
          </div>
          <a href={RESUME_URL} target="_blank">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
