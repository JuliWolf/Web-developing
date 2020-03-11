import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Filter from 'bad-words';

const filter = new Filter();

class CreatePost extends Component {
    static propTypes = {

    }
    constructor(props){
        super(props);

        // Установка состояния
        this.state = {
            content: '',
            valid: false
        };

        //установка обработчиков событий
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    fetchPosts(){

    }

    handlePostChange(e){
        const content = filter.clean(e.target.value);

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

        console.log(this.state);
    }

    render() {
        return (
            <div className="create-post">
                <button onClick={this.handleSubmit}>Post</button>
                <textarea
                    value={this.state.content}
                    onChange={this.handlePostChange}
                    placeholder="What's on your mind?"
                />
            </div>
        );
    }
}

export default CreatePost;
