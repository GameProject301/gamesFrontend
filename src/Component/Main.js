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
          .get(`http://localhost:3000/games`)
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
      <p>Hi </p>
    </main>
    
    
    )
}

}
export default Main ;
