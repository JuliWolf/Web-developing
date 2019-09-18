import React from 'react';
import { Header } from "./Header";
import { Home } from "./Home";

function App() {
    var user= {
        name: 'Anna',
        hobbies: ["Sports", "Reading"]
    };
    function onGreet() {
        alert('Hello');
    }
    function onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-sx-offset-1">
                    <Header homeLink={this.state.homeLink}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-sx-offset-1">
                    <Home
                        name={"Julia"}
                        initialAge={23}
                        user={user}
                        greet={onGreet}
                        changeLink={onChangeLinkName.bind(this)}>

                        <p>This is a paragraph!</p>
                    </Home>
                </div>
            </div>
        </div>
    );
}

export default App;
