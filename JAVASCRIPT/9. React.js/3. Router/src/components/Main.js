import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        )
    }
}
export default Main;