import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import axios from "axios";
import { Input, TextArea, Button } from 'semantic-ui-react';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Comment: { username: "", comment: "" }
        };
    }

    getComment = () => {
        axios
            .get("http://127.0.0.1:8000/api/comments/" + this.props.id)
            .then(res => this.setState({ Comment: res.data }))
            .catch(err => console.log(err));
    }
    render(props) {
        this.getComment();
        return (
            <div className="Comment">
                <div>
                    {/* Comment id = {this.props.id} */}
                    Comment author : {this.state.Comment.username}                     
                </div>
                <div>
                    Comment : {this.state.Comment.comment}
                </div>
            </div>
        );
    };

}

export default Comment;