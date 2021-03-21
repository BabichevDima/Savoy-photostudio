import React from "react";
import styled from "@emotion/styled";

import Carousel from "react-bootstrap/Carousel";
import Vintage from "../../assets/images/Vintage.jpg";
import Classic from "../../assets/images/Classic.jpg";
import Loft from "../../assets/images/Loft.jpg";

export const Main = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Img className="d-block w-100" src={Vintage} alt="First slide" />
        <Carousel.Caption>
          <h3>Зал Vintage</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <Img className="d-block w-100" src={Classic} alt="Second slide" />
        <Carousel.Caption>
          <h3>Зал Classic</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Img className="d-block w-100" src={Loft} alt="Third slide" />
        <Carousel.Caption>
          <h3>Зал Loft</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const Block = styled.div`
  /* height: 400px; */
`;
const Img = styled.img`
  min-height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
`;
