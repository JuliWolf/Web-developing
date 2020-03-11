import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapBox from 'mapbox';

export default class LocationTypeAhead extends Component {
    static propTypes = {
        onLocationUpdate: PropTypes.func.isRequired,
        onLocationSelect: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            text: '',
            locations: [],
            selectedLocation: null
        };
        this.mapbox = new MapBox(process.env.MAPBOX_API_TOKEN);
    }

    render () {
        return [
            <div key="location-typeahead"
                className="location-typeahead">
                <i className=" fa fa-location-arrow"
                    onClick={this.attemptGeoLocation}/>
                <input type="text"
                        onChange={this.handleSearchChange}
                        placeholder="Enter a location..."
                        value={this.state.text}/>
                <button
                    disabled={!this.state.selectedLocation}
                    onClick={this.handleSelectLocation}
                    className="open">
                    Select
                </button>
            </div>
        ];
    }
}
