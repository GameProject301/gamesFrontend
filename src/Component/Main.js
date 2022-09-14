import React from "react";
import '../App.css';

import Platforms from "./Platforms";
import Category from "./Category";

import CarouselRecommanded from './assets/CarouselRecommanded'



class Main extends React.Component{
   
    

render(){



    return (
      <>
      
<CarouselRecommanded />

      <Category/>
      
      {/* <Platforms/> */}
      </>

  

    )
}

}
export default Main ;
