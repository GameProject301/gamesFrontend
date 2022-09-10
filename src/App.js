import React from 'react';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import Main from "./Component/Main"
import Header from './Component/Header';
import Footer from './Component/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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


            </Routes>

<Footer />
            </Router>
</>
    )
  }
}
export default withAuth0(App);