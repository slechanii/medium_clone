import React, { Component } from 'react';
import { Input, TextArea, Form, Button } from 'semantic-ui-react'
import axios from "axios";
import { Redirect } from 'react-router-dom'

class NewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: '',
            body: '',
            redirect: false,
            article: {}
        };
        
    }

    getArticleData = () => {
        this.state.article = {
            title: this.state.title,
            description: this.state.description,
            category: this.state.category,
            body: this.state.body,
            comments: [],
        }
    };

    postArticle = () => {
        this.getArticleData();
        axios
            .post("http://127.0.0.1:8000/api/articles/", this.state.article)
            .then(this.setState({redirect:true}));
    };

    updateArticleState = (event) => {
        let newstate = {};
        newstate[event.target.name] = event.target.value;
        this.setState(newstate);
    };

    render() {
        const redirect = this.state.redirect;
        if (redirect)
            return <Redirect to='/'/>
        return (
            <div className="NewArticle" >
                Write your new Article !
                <div>
                    <Form class="ui form">
                        <div>
                            <Input type="text" name="title" onChange={event => this.updateArticleState(event)} placeholder="Title" />
                        </div>
                        <div>
                            <Input type="text" name="description" onChange={event => this.updateArticleState(event)} placeholder="Description" />
                        </div>
                        <div>
                            <Input type="text" name="category" onChange={event => this.updateArticleState(event)} placeholder="Category" />
                        </div>
                        <div>
                            <TextArea name="body" onChange={event => this.updateArticleState(event)} placeholder="Write your article here" rows="10"></TextArea>
                        </div>

                    </Form>
                    <a href="/">
                        <Button color="red" class="ui primary button">Cancel</Button>
                    </a>

                    <Button color="green" onClick={this.postArticle} class="ui secondary button">Publish Article</Button>
                </div>
            </div>
        );
    };

}

export default NewArticle;