import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readArticle: false,
        };
    }

    setReadArticle = () => {
        this.setState({
            readArticle: true
        })
    }

    render(props) {
        const read_article = this.state.readArticle;

        if (read_article){
            const article_url = "/read_article/" + this.props.id; 
            return <Redirect to={article_url}/>
        }
        return (
            <div className="article" onClick={this.setReadArticle}>
               <p> Category: {this.props.category}</p>
                <p>  Title: {this.props.title}</p>
                <p>Description: {this.props.description}</p>
                <p>Date: {this.props.date}</p>
                <p>{this.props.likes} likes</p>
            </div>
        );
    };

}

export default Article;