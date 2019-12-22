import React, { Component } from 'react';
import axios from "axios";
import NewArticle from './NewArticle';
import { withRouter } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import NewComment from './NewComment'
import Comment from './Comment'
class ArticleView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Article: {
                title: "", category: "", description: "",
                body: "", date: "", likes: 0, comments: [],
            },
            Comments: [],
        };

    }

    componentWillMount() {
        this.getArticleData();
        this.getArticleComments();
    }

    deleteArticle = () => {
        const { match: { params } } = this.props;
        axios
            .delete("http://127.0.0.1:8000/api/articles/" + params.articleId + '/')
            .then(() => {
                this.props.history.push("/");
            })
            .catch(err => console.log(err));
    };

    likeArticle = () => {

        this.getArticleData();
        const { match: { params } } = this.props;
        axios
            .patch("http://127.0.0.1:8000/api/articles/" + params.articleId + '/', {
                likes: this.state.Article.likes + 1
            })
            .then(() => {
                this.displayArticle();
            })
            .catch(err => console.log(err.response.data));
    };

    displayArticle = () => {
        this.getArticleData();
        return (
            <div>
                <div>
                    {this.state.Article.title}
                </div>
                <div>
                    {this.state.Article.category}
                </div>
                <div>
                    {this.state.Article.description}
                </div>
                <div>
                    {this.state.Article.date}
                </div>
                <div>
                    {this.state.Article.body}
                </div>
                <div>
                    {this.state.Article.likes} Likes
                </div>

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

    getArticleComments = () => {
        const { match: { params } } = this.props;
        axios
            .get("http://127.0.0.1:8000/api/comments/" + params.articleId)
            .then(res => this.setState({ Comments: res.data }))
            .catch(err => console.log(err));
    };

    displayComments = () => {
       

       
    };

    render(props) {
        const { match: { params } } = this.props;

        const comments = this.state.Article.comments.map(function (comment) {
            //  alert("comment")
             return <Comment id={comment}/>
        });
        return (
            <div>
                <div className="ArticleView" >
                    ARTICLE VIEW
            id = {params.articleId}
                    {this.displayArticle()}
                </div>
                <div>
                    <Button onClick={this.likeArticle}>Give a Like</Button>
                    <a href="/">
                        <Button>Go Back</Button>
                    </a>
                    <Button onClick={this.deleteArticle}>Delete Article</Button>
                </div>
                <NewComment></NewComment>
                <div>
                    Article comments : {this.state.Article.comments}
                    <div>
                        {comments}
                    </div>
                </div>
            </div>
        );
    };

}

export default ArticleView;