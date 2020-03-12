import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";

import Filter from 'bad-words';
import DisplayMap from "../map/DisplayMap";
import LocationTypeAhead from "../map/LocationTypeAhead";

class CreatePost extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };
    constructor(props){
        super(props);

        // Установка состояния
        this.initialState = {
            content: '',
            valid: false,
            showLocationPicker: false,
            location: {
                lat: 34.1535641,
                lng: -118.1428115,
                name: null
            },
            locationSelected: false
        };

        //установка обработчиков событий
        this.state = this.initialState;
        this.filter = new Filter();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
        this.handleRemoveLocation = this.handleRemoveLocation.bind(this);
        this.handleToggleLocation = this.handleToggleLocation.bind(this);
        this.onLocationSelect = this.onLocationSelect.bind(this);
        this.onLocationUpdate = this.onLocationUpdate.bind(this);
        this.renderLocationControls = this.renderLocationControls.bind(this);
    }

    handlePostChange(e){
        const content = this.filter.clean(e.target.value);

        this.setState(() => {
            return {
                content,
                valid: content.length <= 280
            };
        });
        console.log('Handling an update to the post body!');
    }

    handleSubmit(){
        if(!this.state.valid){
            return;
        }
        if(this.props.onSubmit){
            const newPost = {
                date: Date.now(),
            //    Присвоение публикации временного ключа; API создаст один
                id: Date.now(),
                content: this.state.content
            };
            this.props.onSubmit(newPost);
            this.setState({
                content: '',
                valid: null
            });
        }
        const newPost = {
            content: this.state.content
        };

        if(this.state.locationSelected){
            newPost.location = this.state.location;
        }

        console.log(this.state);
    }

    handleRemoveLocation(){
        this.setState(() => ({
            locationSelected: false,
            location: this.initialState.location
        }));
    }

    onLocationUpdate(location){
        this.setState(() => ({ location }));
    }

    onLocationSelect(location){
        this.setState(() => ({
           location,
           showLocationPicker: false,
           locationSelected: true
        }));
    }

    handleToggleLocation(e){
        e.preventDefault();
        this.setState(state => ({
            showLocationPicker: !state.showLocationPicker
        }));
    }

    renderLocationControls(){
        return (
            <div className="controls">
                <button onClick={this.handleSubmit}>Post</button>
                {this.state.location && this.state.locationSelected ? (
                    <button onClick={this.handleRemoveLocation} className="open location-indicator">
                        <i className=" fa-location-arrow fa"/>
                    </button>
                ) : (
                    <button onClick={this.handleToggleLocation} className="open"> { this.state.showLocationPicker ? 'Cancel' : 'Add location'}{' '}
                    <i className={classnames('fa', {
                        'fa-map-o': !this.state.showLocationPicker,
                        'fa-times': this.state.showLocationPicker
                    })}
                    />
                    </button>
                )}
            </div>
        )
    }

    render() {
        return (
            <div className="create-post">
                <textarea
                    value={this.state.content}
                    onChange={this.handlePostChange}
                    placeholder="What's on your mind?"
                />
                {this.renderLocationControls()}
                <div
                    className="location-picker"
                    style={{ display: this.state.showLocationPicker ? 'block' : 'none'}}>
                    {!this.state.locationSelected && [
                        <LocationTypeAhead
                            key="LocationTypeAhead"
                            onLocationSelect={this.onLocationSelect}
                            onLocationUpdate={this.onLocationUpdate}
                        />,
                        <DisplayMap
                            key="DisplayMap"
                            displayOnly={false}
                            location={this.state.location}
                            onLocationSelect={this.onLocationSelect}
                            onLocationUpdate={this.onLocationUpdate}
                        />
                    ]}
                </div>
            </div>
        );
    }
}

export default CreatePost;
