import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
    constructor(props){
        super();
        // this.age = props.age;
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "Changed Link"
        };
    }
    onMakeOlder(){
        // this.age += 3;
        this.setState({
            age: this.state.age + 3
        });
        console.log(this.age);
    }
    onChangeName(){
        this.props.changeLink(this.state.homeLink)
    }

    render(){
        console.log(this.props);
        let content = "";
        if(true){
            content = <p>Hello!</p>;
        }
        let text = "Something";
        return(
            <div>
                <p>In a new Component!</p>
                { content }
                <p> { text }</p>
                <p> Your name is { this.props.name }, your age is {this.state.age} </p>
                <p> Status: {this.state.status} </p>
                <p>User Object => {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li> )}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={() => this.onMakeOlder} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <button onClick={this.onChangeName.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        )
    }
}
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func,
    changeLink: PropTypes.func,
};