'use strict';
import React  from "react";
import './alaa.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import { axios } from "axios";
class Platforms extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            pcHref:``,
            mobileHref:"",
           playstationHref:" ",
          
        }
    }
isNotAuth=(e)=>{
    e.preventDefault();
alert("you should log in");
}

isAuth=(e)=>{
   
   
   

this.setState({
    pcHref:'/pc',
   playstationHref:'/playStation',
   mobileHref:'/Mobile'
})
}


    render(){
        const { isAuthenticated} = this.props.auth0;
        return(
            <>
{/* <ul className="platfomrslist">
    <li><a href="./pc">pc 🖥️</a></li>
    <li><a href="./Mobile">Mobile 📱</a></li>
    <li><a href="./PlayStation">playStation 🎮</a></li>

</ul> */}
<hr/>
<div class="container">
		
        <div class="row">
<div class="col-md-4 col-xs-4">
                <div class="shop">
                    <div class="shop-img">
                        <img src="https://cdn.shopify.com/s/files/1/0419/5500/0480/products/summer-gaming-pc-2022-amd-ryzen-5600-44ghz-16gb-ram-1tb-ssd-rtx-3070-8gb-full-rgb-fans-gaming-pc-cyberpower-925825_540x.jpg?v=1657414112" alt=""
                        className="size2"/>
                    </div>
                    <div class="shop-body">
                        <h3>PC<br/>Collection</h3>


                      
                            <a onClick={(isAuthenticated?this.isAuth:this.isNotAuth) }  href={this.state.pcHref} class="cta-btn">Explore <i class="fa fa-arrow-circle-right"></i></a>

                    </div>
                </div>
            </div>
        

            
            <div className="col-md-4 col-xs-6">
                <div className="shop">
                    <div class="shop-img">
                        <img src="https://static.tweaktown.com/news/7/9/79326_52_sony-25-new-ps5-games-in-development-will-offer-incredible-variety.jpg" alt=""
                        className="size2"/>
                    </div>
                    <div class="shop-body">
                        <h3>Playstation<br/>Collection</h3>
                        <a onClick={(isAuthenticated?this.isAuth:this.isNotAuth) }  href={this.state.playstationHref} class="cta-btn">Explore<i class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        
            <div class="col-md-4 col-xs-6">
                <div class="shop">
                    <div class="shop-img">
                        <img src="https://test.playbrains.com/wp-content/uploads/2014/03/Mobile-Gaming-Advantages-of-Mobile-Gaming-blog-March-14-2014.jpg" alt=""
                        className="size2"/>
                    </div>
                    <div class="shop-body">
                        <h3>Mobiles<br/>Collection</h3>
                        <a onClick={(isAuthenticated?this.isAuth:this.isNotAuth) }  href={this.state.mobileHref} class="cta-btn">Explore <i class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
  </div>
</div>
<hr/>
</>

          
        )
    }
}
export default withAuth0(Platforms);