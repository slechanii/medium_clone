import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import { Input, TextArea, Button } from 'semantic-ui-react';
class NewComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            comment: "",
        };
    }

    
    postComment = () => {

    };

    render(props) {
        return (
                <p>j</p>
        );
    };

}

export default NewComment;