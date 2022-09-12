import React from "react";
import '../App.css';
import CarouselRecommanded from './assets/CarouselRecommanded'


class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          games: [],
        };
      }
    
render(){


    
    return (<div>

<CarouselRecommanded />

    </div>
    )
}

}
export default Main ;
