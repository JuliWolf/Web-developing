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
        this.handleLocationUpdate = this.handleLocationUpdate.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectLocation = this.handleSelectLocation.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }

    componentWillUnmount(){
        this.resetSearch()
    }

    handleLocationUpdate(location){
        this.setState(() => {
            return {
                text: location.name,
                locations: [],
                selectedLocation: location
            };
        });
        this.props.onLocationUpdate(location);
    }

    handleSearchChange(e){
        const text = e.target.value;
        this.setState(() => ({ text }));
        if(!text) return;
        this.mapbox.geocodeForward(text, {}).then(loc => {
            if(!loc.entiry.features || !loc.entity.features.length){
                return;
            }
            const location = loc.entity.features.map(feature => {
                const [lng, lat] = feature.center;
                return {
                    name: feature.place_name,
                    lat,
                    lng
                };
            });
            this.setState(() => ({ locations }));
        })
    }

    resetSearch() {
        this.setState(() => {
            return {
                text: '',
                locations: [],
                selectedLocation: null
            };
        });
    }

    handleSelectLocation() {
        this.props.onLocationSelect(this.state.selectedLocation);
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
