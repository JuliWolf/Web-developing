import React from 'react';
import PropTypes from 'prop-types';

export class ChildProps extends React.Component{
    constructor(props){
        super();
        this.state = {
            homeLink: props.initialLinkName
        };
    }
    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }
    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
    }

    render(){

        return(
            <div>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        )
    }
}
ChildProps.propTypes = {
    changeLink: PropTypes.func,
    initialLinkName:PropTypes.string,
};