import PropTypes from 'prop-types';
import React, { Component } from 'react';
import enroute from 'enroute';
import invariant from 'invariant';

export class Router extends Component {
    static propTypes = {
        children: PropTypes.array,
        location: PropTypes.string.isRequired
    };

    constructor(props){
        super(props);

        //Хранение маршрутов в компоненте router
        this.routes = {};
        // Настройка роутера для сопоставления и маршрутизации
        this.router = enroute(this.routes);
        this.addRoutes(props.children)
    }

    cleanPath(path){
        return path.replace(/\/\//g, '/');
    }

    normizeRoute(path, parent){
        if(path[0] === '/'){
            return path
        }

        if(parent == null){
            return path;
        }

        return '${parent.route}/${path}';
    }

    addRoute(element, parent){
        // Получем компонент, маршрут и свойства потомков
        const { component, path, children } = element.props;

        // Проверяем, что каждый route имеет маршрут и свойство компонента или выдает ошибку
        invariant(component, 'Route ${path} is missing the "path" property');
        invariant(typeof path === 'string', 'Route ${path} is not a string');

        const render = (params, renderProps) => {
            // Объединение свойств предка и дочернего компонента
            const finalProps = Object.assign({ params },
                this.props, renderProps);
            // Создание нового компонента с объединенными свойствами
            const children = React.createElement(component, finalProps);
            // Если есть предок, вызывается метод render с родительскими параметрами, но и с написанными потомками
            return parent ? parent.render(params, { children }) : children;
        };

        const route = this.normizeRoute(path, parent);

        // Если в текущем компоненте Route есть и другие вложенные дочерние компоненты, процесс повторяется и в маршрут передается родительский компонент
        if(children){
            this.addRoutes(children, { route, render });
        }
        //
        this.routes[this.cleanPath(route)] = render;
    }

    addRoutes(routes, parent){
        React.Children.forEach(routes, route => this.addRoute(route, parent));
    }

    render(){
        const { location } = this.props;
        // передача текущего местоположения роутеру в качестве свойства
        invariant(location, '<Router/> needs a location to work');
        // Применение роутера для нахождения соответствия местоположению и возврата соответствующему компонента
        return this.router(location)
    }
}
