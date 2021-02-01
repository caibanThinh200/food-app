import React from "react";
import Register from "./Register";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Section(props){
    return(
       
            <Switch>
                <Route exact path = "/">Home ne</Route>
                <Route path="/contact">Contact</Route>
                <Route path ="/about">About</Route>
                <Route path="/cart">Cart</Route>
                <Route path="/register" ><Register/></Route>
                <Route paht="/login"><Login/></Route>
            </Switch>
     
    )
}
export default Section