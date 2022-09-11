import React from "react";
import axios from "axios";




class Playstation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            parent_platforms: "2",
        };
    }

    

    componentDidMount = () => {
        
        axios
            .get(`${process.env.REACT_APP_URL}games?parent_platforms=${this.state.parent_platforms}`)
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
            < >

            

                    {this.state.games.map(item => {
                        return (
                            <>

                                <h3>{item.name}</h3>

                            </>
                        )
                    })}






            </>
        )
    }

}
export default Playstation;
