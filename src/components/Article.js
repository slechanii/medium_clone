import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

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
            const article_url = "/read_article?id=" + this.props.id; 
            alert("redirect  " + article_url);
            return <Redirect to={article_url}/>
        }
        return (
            <div className="Article" onClick={this.setReadArticle}>
                <p>{this.props.category}</p>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>{this.props.date}</p>
            </div>
        );
    };

}

export default Article;