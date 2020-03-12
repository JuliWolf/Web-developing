import React from 'react';
import { render } from 'react-dom';

import * as API from './shared/http';
import { history } from './history';
import Route from './components/router/Route';
import Router from './components/router/Router';
import App from './app';
import Home from './pages/Home';
import SinglePost from './pages/Post';
import NotFound from "./pages/404";

import './shared/crash';
import './shared/service-worker';
import './shared/vendor';
// NOTE: this isn't ES*-compliant/possible, but works because we use Webpack as a build tool
import './styles/styles.scss';

// создание функции, которая будет вызываться для рендеринга приложения
// Оборачивание метода render React DOM, чтобы стало возможно передавать данные о метоположении и обратный вызов
export const renderApp = (state, callback = () => {}) => {
    render(
        <Router {...state}>
            <Route path="" component={App}>
                <Route path="/" component={Home} />
                <Route path="/posts/:postId" component={SinglePost} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>,
        document.getElementById('app'),
        callback
    );
};

let state = {
    location: window.location.pathname
};
renderApp(state);

// Сигнализация при изменении местоположения и обновление роутера, что приведет к повторному рендерингу приложения с новыми данными состояния
history.listen(location => {
    state = Object.assign({}, state, {
        location: location.pathname
    });
    renderApp(state)
});


