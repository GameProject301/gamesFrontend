import React from 'react';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import Main from "./Component/Main"
import Header from './Component/Header';
import Footer from './Component/Footer';
import PC from './Component/PC';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Mobile from './Component/mobile';
import PlayStation from './Component/Playstation';
import Explore from './Component/Explore';
import Recently from './Component/Recently';
import Top from './Component/Top';
import Category from "./Component/Category"
import Profile from './Component/Profile';
import MyList from './Component/myList';
class App extends React.Component{

  render(){
    const { isAuthenticated} = this.props.auth0;

    return(
<>
<Router>
  <Header />
<Routes>
            <Route 
              exact path="/"
              element={isAuthenticated && <Main />}
            >
            </Route>
            <Route 
              exact path="/pc"
              element={isAuthenticated && <PC />}
            >
            </Route>
            
            <Route 
              exact path="/mobile"
              element={isAuthenticated && <Mobile />}
            >
            </Route>
            <Route 
              exact path="/playstation"
              element={isAuthenticated && <PlayStation />}
            >
            </Route>
            <Route 
              exact path="/explore"
              element={isAuthenticated && <Explore/>}
            >
            </Route>
            <Route 
              exact path="/recently"
              element={isAuthenticated && <Recently/>}
            >
            </Route>
            <Route 
              exact path="/top"
              element={isAuthenticated && <Top/>}
            >
            </Route>
            <Route 
              exact path="/category"
              element={isAuthenticated && <Category/>}
            >
            </Route>
            <Route 
              exact path="/profile"
              element={isAuthenticated && <Profile/>}
            >
            </Route>
           
            </Routes>

<Footer />
            </Router>
</>
    )
  }
}
export default withAuth0(App);