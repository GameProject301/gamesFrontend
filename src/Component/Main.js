import React from "react";
import axios from "axios";


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
            console.log(result.data);
            this.setState({
              games: result.data,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };

render(){


    
    return (
    <main >
      {this.state.games.map(item=>{
              return (
                <>
                  <h3>

                  <h3>{item.name}</h3>

                  </h3>
                  
        </>
      )})}
    </main>
    
    
    )
}

}
export default Main ;
