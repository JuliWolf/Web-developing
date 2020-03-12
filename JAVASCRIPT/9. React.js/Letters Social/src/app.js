import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from './components/error/Error';
import Loader from './components/Loader';
import Navbar from './components/nav/navbar';

/**
 * The app component serves as a root for the project and renders either children,
 * the error state, or a loading state
 * @method App
 * @module letters/components
 */
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            loading: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        console.error(errorInfo);
        this.setState(() => ({
            error: error
        }));
    }

    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        if(this.state.error){
            return (
                <div className="app">
                    <ErrorMessage error={this.state.error}/>
                </div>
            );
        }
        return (
            <div className="app">
                <Navbar user={this.props.user}/>
                {this.state.loading ? (
                    <div className="loading">
                        <Loader />
                    </div>
                ) : (
                    this.props.children
                )}
            </div>
        );
    }
}

export default App;
