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
        this.attemptGeoLocation = this.attemptGeoLocation.bind(this);
        this.handleLocationUpdate = this.handleLocationUpdate.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectLocation = this.handleSelectLocation.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }

    // Когда компонент размонтируется, поиск сбрасывается
    componentWillUnmount(){
        this.resetSearch()
    }

    // Когда местоположение выбрано, обновляется локальное состояние компонента
    handleLocationUpdate(location){
        this.setState(() => {
            return {
                text: location.name,
                locations: [],
                selectedLocation: location
            };
        });
        // Местоположение передается предку
        this.props.onLocationUpdate(location);
    }

    // Извлекаем текст из события, которое получаем, когда пользователь что-то вводит в поле поиска
    handleSearchChange(e){
        const text = e.target.value;
        this.setState(() => ({ text }));
        if(!text) return;
        // Изпользуется клиент Mapbox для поиска местоположенитя с учетом ввода пользователя
        this.mapbox.geocodeForward(text, {}).then(loc => {
            if(!loc.entity.features || !loc.entity.features.length){
                return;
            }
            // Преобразование результатов Mapbox в формат
            const locations = loc.entity.features.map(feature => {
                const [lng, lat] = feature.center;
                return {
                    name: feature.place_name,
                    lat,
                    lng
                };
            });
            // Обновление состояния с новым местоположением
            this.setState(() => ({ locations }));
        });
    }

    // Сброс состояния компонента
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

    attemptGeoLocation(){
        // проверка того, поддерживает ли браузер геолокацию
        if('geolocation' in navigator){
            // Получение текущей позиции пользовательского устройства
            navigator.geolocation.getCurrentPosition(
                // Возвращение координат, которые вы можете использовать
                ({ coords }) => {
                    const { latitude, longitude } = coords;
                    this.mapbox.geocodeReverse({ latitude, longitude }, {})
                        // Применение Mapbox для геокодирования координат и преждевременного возврата, если ничего не найдено
                        .then(loc => {
                            if(loc.entity.features || !loc.entity.features.length) {
                                return;
                            }
                            const feature = loc.entity.features[0];
                            const [lng, lat] = feature.center;
                            // Создание полезной нагрузки метоположения и обновления состояния компонента
                            const currentLocation = {
                                name: feature.place_name,
                                lat,
                                lng
                            };
                            this.setState(() => ({
                                locations: [currentLocation],
                                selectedLocation: currentLocation,
                                text: currentLocation.name
                            }));
                            // Вызов свойства handleLocationUpdate с новым местоположением
                            this.handleLocationUpdate(currentLocation);
                        });
                },
                null,
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            )
        }
    }

    render () {
        return [
            <div key="location-typeahead" className="location-typeahead">
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
            </div>,
            this.state.text.length && this.state.locations.length ? (
                <div key="location-typehead-results"
                     className="locationtypehead-results">
                    { this.state.locations.map(location => {
                        return (
                            <div
                                onClick={e => {
                                    e.preventDefault();
                                    this.handleLocationUpdate(location);
                                }}
                                key={location.name}
                                className="result">
                                {location.name}
                            </div>
                        );
                    })};
                </div>
            ) : null
        ];
    }
}
