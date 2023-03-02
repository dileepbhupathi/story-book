import { Button } from "antd";
import React from "react";
import "./ImageCard.scss";
import { BsArrowRight } from "react-icons/bs";
import PropTypes from "prop-types";

export const ImageCard = ({
  images,
  ImageCardCaption,
  ImageCardTitle,
  ImageCardContent,
  ImageCardButton,
  icon,
  size,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${images})`,
      }}
      className="image-card-container"
    >
      <h3 className="image-card-caption">{ImageCardCaption}</h3>
      <h1 className="image-card-title">{ImageCardTitle}</h1>
      <p className="image-card-content">{ImageCardContent}</p>
      <Button type='primary' className="read-more-button" size={size}>
        {ImageCardButton} <span>{icon}</span>
      </Button>
    </div>
  );
};

ImageCard.propTypes = {
  images: PropTypes.object.isRequired,
  ImageCardCaption: PropTypes.string.isRequired,
  ImageCardTitle: PropTypes.string.isRequired,
  ImageCardContent: PropTypes.string.isRequired,
  ImageCardButton: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.object.isRequired,
  
};

ImageCard.defaultProps = {
  images: "https://images.alphacoders.com/480/thumbbig-480661.webp",
  ImageCardCaption: "Built by developers",
  ImageCardTitle: "Complex Documentation",
  ImageCardContent:
    "From colors, cards, typography to complex elements, you will find the full documentation. Play with the utility classes and you will create unlimited combinations for our components.",
  ImageCardButton: "Read More",
  size : 'large',
  icon: <BsArrowRight className="icon" />,
};
