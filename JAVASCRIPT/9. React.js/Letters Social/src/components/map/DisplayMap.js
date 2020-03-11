import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DisplayMap extends Component {
    constructor(props){
        super(props);
        this.state ={
            mapLoaded: false,
            location: {
                lat: props.location.lat,
                lng: props.location.lng,
                name: props.location.name
            }
        };
        this.ensureMapExists = this.ensureMapExists.bind(this);
        this.updateMapPosition = this.updateMapPosition.bind(this);
        this.generateStaticMapImage = this.generateStaticMapImage.bind(this);
    }
    static propTypes = {
        location: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
            name: PropTypes.string
        }),
        displayOnly: PropTypes.bool
    };

    static defaultProps = {
        displayOnly: true,
        location: {
            lat: 34.1535641,
            lng: -118.1428115,
            name: null
        }
    };

    componentDidMount(){
        this.L = window.L;
        // Проверяем есть ли у карты информация о местоположении
        if(this.state.location.lng && this.state.location.lat){
            this.ensureMapExists();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Mapbox фннулирует размер карты, чтобы она отображалась корректно при скрытии/показе
        if(this.map && !this.props.displayOnly){
            this.map.invalidateSize(false);
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // Когда местоположение меняется
        if(nextProps.location){
            // Если доступно новое местоположение, то проверка предыдущего и текущего местоположения
            const locationAreEqual = Object.keys(nextProps.location).every(
                k => nextProps.location[k] === this.props.location[k]
            );
            if(!locationAreEqual) {
                this.updateMapPosition(nextProps.location);
            }
        }
    }

    ensureMapExists(){
        // Проверяем не пересоздается ли карта
        if(this.state.mapLoaded) return;
        // Создание новой карты
        this.map = this.L.mapbox.map(this.mapNode,
            'mapbox.streets', {
            zoomControl: false,
                scrollWheelZoom: false
            });
        //Установка вида карты на основе значений широты и долготы полученных клиентом
        this.map.setView(this.L.latLng(this.state.location.lat,
        this.state.location.lng), 12);

        //Добавление маркера на карту при создании
        this.addMarker(this.state.location.lat, this.state.location.lng);

        // Обновление состояния
        this.setState(() => ({ mapLoaded: true }));
    }

    updateMapPosition(location){
        const {lat, lng} = location;
        this.map.setView(this.L.latLng(lat, lng));
        this.addMarker(lat, lng);
        this.setState(() => ({ location }));
    }

    addMarker(lat, lng){
        if(this.marker){
            // Обновление существующего маркера
            return this.marker.setLatLng(this.L.latLng(lat, lng));
        }
        // Создание маркера
        this.marker = this.L.marker([lat, lng], {
            icon: this.L.mapbox.marker.icon({
                'marker-color': '#4469af'
            })
        });
        this.marker.addTo(this.map);
    }
    generateStaticMapImage(lat, lng){
        return `https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/${lat},${lng},12,0,0/600x175?access_token=${process
            .env.MAPBOX_API_TOKEN}`;
    }


    render(){
        return [
            <div key="displayMap" className="displayMap">
                <div
                    className="map"
                    ref={node => {
                        this.mapNode = node;
                    }}
                >
                    {/*вывод изображения местоположения*/}
                    {!this.state.mapLoaded && (
                        <img src={this.generateStaticMapImage(this.state.location.lat, this.state.location.lng)} alt={this.state.location.name}/>
                    )}
                </div>
            </div>,
            // Если выбран режим только отображение, указываются название и индикатор местоположения
            this.props.displayOnly && (
                <div key="location-description"
                    className="locationdescription">
                    <i className="location-icon fa fa-location-arrow" />
                    <span className="location-name">
                        {this.state.location.name}
                    </span>
                </div>
            )
        ];
    }
}
