// ReactDOM.render(
//     ReactElement element,
//     DOMElement container,
//     [function callback]
// ) -> ReactComponent

// import React from "react";
// import { render } from "react-dom";
const node = document.getElementById("root");
// const root =
//     React.createElement(
//         'div',
//         {},
//         React.createElement(
//             'h1',
//             {},
//             'Hello, world!',
//             React.createElement(
//                 'a',
//                 {href: 'maito:mark@ifelse.io'},
//                 React.createElement(
//                     'h1',
//                     {},
//                     'React in Action'),
//                 React.createElement(
//                     'em',
//                     {},
//                     '...and now it really is!')
//             )
//         )
//     );
//
// ReactDOM.render(root, node);

const data = {
    post: {
        id: 123,
        content:
            "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
        user: "Mark Thomas"
    },
    comments: [
        {
            id: 0,
            user: "David",
            content: "such. win."
        },
        {
            id: 1,
            user: "Haley",
            content: "Love it."
        },
        {
            id: 2,
            user: "Peter",
            content: "Who was Samuel Johnson?"
        },
        {
            id: 3,
            user: "Mitchell",
            content: "@Peter get off Letters and do your homework"
        },
        {
            id: 4,
            user: "Peter",
            content: "@mitchell ok :P"
        }
    ]
};

// Создание класса React в качестве компонента Post
// class Post extends React.Component {
//     render() {
//         return React.createElement(
//             "div",
//             {
//                 className: "post"
//             },
//             React.createElement(
//                 "h2",
//                 {
//                     className: "postAuthor",
//                     id: this.props.id
//                 },
//                 this.props.user,
//                 React.createElement(
//                     "span",
//                     {
//                         className: "postBody"
//                     },
//                     this.props.content
//                 ),
//                 this.props.children
//             )
//         );
//     }
// }

// With JSX
class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <h2 className="postAuthor">{this.props.user}</h2>
                <span className="postBody">{this.props.content}</span>
                {this.props.children}
            </div>
        );
    }
}

Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

// class Comment extends React.Component {
//     render() {
//         return React.createElement(
//             "div",
//             {
//                 className: "comment"
//             },
//             React.createElement(
//                 "h2",
//                 {
//                     className: "commentAuthor"
//                 },
//                 this.props.user,
//                 React.createElement(
//                     "span",
//                     {
//                         className: "commentContent"
//                     },
//                     this.props.content
//                 )
//             )
//         );
//     }
// }

// With JSX
class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.user + " : "}</h2>
                <span className="commentContent">{this.props.content}</span>
            </div>
        );
    }
}

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
};

// class CreateComment extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             content: '',
//             user: ''
//         };
//         // Связывание с методами компонентов
//         this.handleUserChange = this.handleUserChange.bind(this);
//         this.handleTextChange = this.h.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleUserChange(event){
//         this.setState(() => ({
//             user: event.target.value
//         }));
//     }
//     handleTextChange(event){
//         this.setState(() => ({
//             content: event.target.value
//         }));
//     }
//     handleSubmit(event){
//         event.preventDefault();
//         this.props.onCommentSubmit({
//             user: this.state.user.trim(),
//             content: this.state.content.trim()
//         });
//         this.setState(() => ({
//             user: '',
//             content: ''
//         }));
//     }
//     render() {
//         return React.createElement(
//             "form",
//             {
//                 className: "createComment",
//                 onSubmit: this.handleSubmit
//             },
//             React.createElement("input", {
//                 type: "text",
//                 placeholder: "Your name",
//                 value: this.state.user,
//                 onChange: this.handleUserChange
//             }),
//             React.createElement("input", {
//                 type: "text",
//                 placeholder: "Thoughts?",
//                 value: this.state.content,
//                 onChange: this.handleTextChange
//             }),
//             React.createElement("input", {
//                 type: "submit",
//                 value: "Post"
//             })
//         );
//     }
// }

// With JSX

class CreateComment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: '',
            user: ''
        };
        // Связывание с методами компонентов
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event){
        this.setState(() => ({
            user: event.target.value
        }));
    }
    handleTextChange(event){
        this.setState(() => ({
            content: event.target.value
        }));
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onCommentSubmit({
            user: this.state.user.trim(),
            content: this.state.content.trim()
        });
        this.setState(() => ({
            user: '',
            content: ''
        }));
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="createComment">
                <input
                    value={this.state.user}
                    onChange={this.handleUserChange}
                    placeholder="Your name"
                    type="text"
                />
                <input
                    value={this.state.content}
                    onChange={this.handleTextChange}
                    placeholder="Thoughts?"
                    type="text"
                />
                <button type="submit">Post</button>
            </form>
        );
    }
}

CreateComment.propTypes = {
    content: PropTypes.string
};

// class CommentBox extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             comments: this.props.comments
//         };
//         this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
//     }
//
//     handleCommentSubmit(comment){
//         const comments = this.state.comments;
//         // Не зменяем состояние непоследственно
//         comment.id = Date.now();
//         const newComments = comments.concat([comment]);
//         this.setState({
//             comments: newComments
//         });
//     }
//
//     render(){
//         return React.createElement(
//             'div',
//             {
//                 className: 'commentBox'
//             },
//             React.createElement(Post, {
//                 id: this.props.post.id,
//                 content: this.props.post.content,
//                 user: this.props.post.user
//             }),
//             this.state.comments.map(function(comment){
//                 return React.createElement(Comment, {
//                     key: comment.id,
//                     id: comment.id,
//                     content: comment.content,
//                     user: comment.user
//                 });
//             }),
//             React.createElement(CreateComment, {
//                 // Передача родительского метода handleCommentSubmit компоненту CreateComment для использования
//                 onCommentSubmit: this.handleCommentSubmit
//             })
//         );
//     }
// }

// With JSX
class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.comments
        };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleCommentSubmit(comment){
        const comments = this.state.comments;
        // Не зменяем состояние непоследственно
        comment.id = Date.now();
        const newComments = comments.concat([comment]);
        this.setState({
            comments: newComments
        });
    }

    render() {
        return (
            <div className="commentBox">
                <Post
                    id={this.props.post.id}
                    content={this.props.post.content}
                    user={this.props.post.user}
                />
                {this.state.comments.map(function(comment) {
                    return (
                        <Comment
                            key={comment.id}
                            content={comment.content}
                            user={comment.user}
                        />
                    );
                })}
                <CreateComment onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}

CommentBox.propTypes = {
    post: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object)
};


// Передаем класс Post React функции React.createElement вместе с некоторыми свойствами для создания элемента
const App = React.createElement(
    Post,
    {
        id: 1,
        content: " said: This is a post!",
        user: "mark"
    },
    React.createElement(Comment, {
        id: 2,
        user: "bob",
        content: " commented: wow! how cool!"
    }),
    React.createElement(CreateComment)
);

// ReactDOM.render(App, node);

// ReactDOM.render(
//     React.createElement(CommentBox, {
//         comments: data.comments,
//         post: data.post
//     }),
//     node);

//With JSX
ReactDOM.render(
    <CommentBox
        comments={data.comments}
        post={data.post}
    />,
    node
);


