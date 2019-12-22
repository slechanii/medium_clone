import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import { Input, TextArea, Button } from 'semantic-ui-react';
class NewComment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(props) {
        return (
            <div className="NewComment">
                write NewComment
                <div>
                    <Input type="text" placeholder="Username"></Input>
                    <TextArea>Enter your NewComment</TextArea>
                    <Button>Post NewComment</Button>
                </div>
            </div>
        );
    };

}

export default NewComment;