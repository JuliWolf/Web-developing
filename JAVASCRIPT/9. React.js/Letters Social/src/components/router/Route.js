import PropTypes from 'prop-types';
import { Component } from 'react';
// Библиотека гарантирует, что компонент никогда не будет отображаться
import invariant from 'invariant';

class Route extends Component {
     static propTypes = {
         path: PropTypes.strign,
         component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
     }

     render(){
         return invariant(false, "<Route> elements are for config only and shouldn't be rendered")
     }
}

export default Route;
