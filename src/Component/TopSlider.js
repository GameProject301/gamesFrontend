import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
class TopSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
        };
    }
    componentDidMount = () => {
        axios
            .get(
                `${process.env.REACT_APP_URL}top`
            )
            .then((result) => {
                console.log(result.data);
                this.setState({
                    games: result.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (

                <div style={{width:"400px"}}>
            <Carousel fade>
            {
                this.state.games.map((item) => {
                    return (
                        <Carousel.Item>
                        <img
                        className= "d-block w-100"
                    src = { item.image }
                    alt = "Slide"
                        />
                        <Carousel.Caption>
                        <h3>{ item.name } </h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                  );
            })
    }
              </Carousel>
    </div>
    );
  }
}
export default TopSlider;
