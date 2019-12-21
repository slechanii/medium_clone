import React, { Component } from 'react';
import axios from "axios";
import NewArticle from './NewArticle';

class ArticleView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Article: {title:""},
        };

    }

    componentWillMount() {
        this.getArticleData();
    }

    displayArticle = () => {
        // alert(this.state.Article.title);
        return (
            <div>
              title is {this.state.Article.title}
            </div>
        )
    };

    getArticleData = () => {
        const { match: { params } } = this.props;
        axios
            .get("http://127.0.0.1:8000/api/articles/" + params.articleId)
            .then(res => this.setState({ Article: res.data }))
            .catch(err => console.log(err));
    };

    render(props) {
        const { match: { params } } = this.props;
        //  alert(this.state.Article.title);
        return (
            <div className="ArticleView" >
                ARTICLE VIEW
            id = {params.articleId}
            {this.displayArticle()}
                {/* Name = {this.Article.title}  */}
                {/* <p>{this.props.category}</p>
            <p>{this.props.title}</p>
            <p>{this.props.description}</p>
            <p>{this.props.date}</p> */}
            </div>
        );
    };

}

export default ArticleView;