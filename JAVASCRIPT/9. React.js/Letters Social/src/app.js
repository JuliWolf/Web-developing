import React, { Component } from 'react';
import PropTypes from 'prop-types';
import parseLinkHeader from 'parse-link-header';
import orderBy from 'lodash/orderBy';

import ErrorMessage from './components/error/Error';
import Loader from './components/Loader';
import * as API from './shared/http';
import Ad from './components/ad/Ad';
import Navbar from './components/nav/navbar';
import Post from './components/post/Post';
import Welcome from './components/welcome/Welcome';
import CreatePost from "./components/post/Create";

/**
 * The app component serves as a root for the project and renders either children,
 * the error state, or a loading state
 * @method App
 * @module letters/components
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: false,
            posts: [],
            endpoint: `${process.env
                .ENDPOINT}/posts?_page=1&_sort=date&_order=DESC&_embed=comments&_expand=user&_embed=likes`,
        };
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount(){
        this.getPosts();
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        console.error(errorInfo);
        this.setState(() => ({
            error: error
        }));
    }

    getPosts(){
        API.fetchPosts(this.state.endpoint)
            .then(res => {
                return res
                    .json()
                    .then(posts => {
                        const links = parseLinkHeader(res.headers.get('Link'));
                        this.setState(() => ({
                            posts: orderBy(this.state.posts.concat(posts),
                                'date', 'desc'),
                            endpoint: links.next.url
                        }));
                    })
                .catch(err => {
                    this.setState(() => ({error: err}));
                });
            });
    }

    createNewPost(post){
        this.setState(prevState => {
            return {
                posts: orderBy(prevState.posts.concat(newPost), 'date', 'desc')
            }
        })
    }

    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div className="app">
                <Navbar/>
                {this.state.loading ? (
                    <div className="loading">
                        <Loader />
                    </div>
                ) : (
                    <div className="home">
                        <Welcome key="welcome" />
                        <div>
                            {this.state.posts.length && (
                                <div className="posts">
                                    {this.state.posts.map(({ id }) => (
                                        <Post id={id} key={id}
                                                user={this.props.user}/>
                                    ))}
                                </div>
                            )}
                            <button className="block" onClick={this.getPosts}>
                                Load more posts
                            </button>
                            <CreatePost onSubmit={this.createNewPost}/>
                        </div>
                        <div>
                            <Ad
                                url="https://ifelse.io/book"
                                imageUrl="/static/assets/ads/ria.png"
                            />
                            <Ad
                                url="https://ifelse.io/book"
                                imageUrl="/static/assets/ads/orly.jpg"
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
