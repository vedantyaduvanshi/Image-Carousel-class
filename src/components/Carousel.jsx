import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + images.length) % images.length,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const currentImage = images[currentIndex];

    return (
      <div className="carousel-container">
        <ArrowBackIosIcon onClick={this.handlePrev} className="arrow-icon" />
        <img src={currentImage} alt={`Image ${currentIndex + 1}`} className="carousel-image" />
        <ArrowForwardIosIcon onClick={this.handleNext} className="arrow-icon" />
      </div>
    );
  }
}

export default Carousel;
