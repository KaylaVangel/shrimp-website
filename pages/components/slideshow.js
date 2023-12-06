import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';




export default function Slideshow() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../images/sulawesi.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Sulawesi</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../images/calceo.jpg"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Golden Calceo</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../images/OEtiger.jpg"
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>OE Red Tiger Blue Body</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
      
