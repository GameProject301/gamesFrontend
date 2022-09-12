import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import LoginButton from "../LoginButton";

class CarouselRecommanded extends React.Component {

    render() {

        return (
            <div style={{
                display: "inlineBlock",
                height: "660px"
            }} >
                <div>
                    <Carousel style={{ display: "inlineBlock", height: "660px" }} >
                        <Carousel.Item interval={1000} style={{
                            height: "660px",
                        }}  >
                            <img
                                className="d-block w-100"
                                src="https://images6.alphacoders.com/984/984461.jpg"
                            />
                            <Carousel.Caption>
                                <h3>red dead</h3>
                            </Carousel.Caption>
                        </Carousel.Item >
                        <Carousel.Item interval={500} style={{
                            height: "660px",
                        }}>
                            <img
                                className="d-block w-100"
                                src="https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>god of war</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{
                            height: "660px",
                        }}>
                            <img
                                className="d-block w-100"
                                src="https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>uncharted</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{
                            height: "660px",
                        }}>
                            <img
                                className="d-block w-100"
                                src="https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>dota-2</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>



                <div>






                    <div style={{
                        color: "#ffffff",
                        position: "absolute",
                        left: "12%",
                        top: "44%",
                        zIndex: "1",
                        background: "linearGradient(black, transparent)",
                        justifyContent: "center",
                        textAlign: "center",


                    }} >


                        <h1 >Pro Player</h1>
                        <h3>winner winner chicken dinner</h3>



                        <div
                            style={{
                                display: "flex",
                                justifyContent: "Center",
                                margin: "30px"
                            }}
                        >

                            <LoginButton style={{
                                margin: "0 15px"
                            }} variant="warning" />


                            <Button style={{
                                margin: "0 15px"
                            }} variant="outline-warning">explor</Button>

                        </div>
                    </div>

                </div>


            </div>

        )
    }
}
export default CarouselRecommanded;