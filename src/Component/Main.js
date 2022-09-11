import React from "react";
import axios from "axios";
import '../App.css';
// import PC from "./PC";


class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          games: [],
        };
      }
    


      componentDidMount = () => {
        axios
          .get(`${process.env.REACT_APP_URL}games`)
          .then((result) => {
            // console.log(result.data);
            this.setState({
              games: result.data,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };

render(){


    
    return (<div></div>
    // <main className="main">
    //   {this.state.games.map(item=>{
    //           return (
    //             <>
    //               <h3>

    //               <h3>{item.name}</h3>

    //               </h3>
                  
    //     </>
    //   )})}
    
    // </main>
    // <PC></PC>
    
    )
}

}
export default Main ;
