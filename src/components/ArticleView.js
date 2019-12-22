import React, { Component } from 'react';
import axios from "axios";
import { Input, TextArea, Button } from 'semantic-ui-react';
import Comment from './Comment'

class ArticleView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Article: {
                title: "", category: "", description: "",
                body: "", date: "", likes: 0, comments: [],
            },
            Comment: { username: "", comment: "", article:0 },
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
                this.getArticleData();
                this.displayArticle();
            })
            .catch(err => console.log(err.response.data));
    };

    displayArticle = () => {

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

    postComment = () => {
        const { match: { params } } = this.props;
        this.state.Comment.article = params.articleId;

        axios
            .post("http://127.0.0.1:8000/api/comments/", this.state.Comment)
            .then(this.getArticleData())
            .catch(err => console.log(err));
    };

    updateCommentState = (event) => {
        if (event.target.name == "username")
            this.state.Comment.username = event.target.value;
        else
            this.state.Comment.comment = event.target.value;
    };

    render(props) {
        const { match: { params } } = this.props;
        const comments = this.state.Article.comments.map(function (comment) {
            return <Comment id={comment} />
        });
        return (
            <div>
                <div className="ArticleView" >
                    ARTICLE VIEW
                    {this.displayArticle()}
                </div>
                <div>
                    <Button onClick={this.likeArticle}>Give a Like</Button>
                    <a href="/">
                        <Button>Go Back</Button>
                    </a>
                    <Button onClick={this.deleteArticle}>Delete Article</Button>
                </div>

                <div className="NewComment">
                    <div>
                        ----Write New Comment----
                </div>
                    <div>
                        <Input name="username" onChange={event => this.updateCommentState(event)} type="text" placeholder="Enter your name"></Input>
                        <TextArea name="comment" onChange={event => this.updateCommentState(event)} placeholder="Enter your comment"></TextArea>
                        <Button onClick={this.postComment}>Post NewComment</Button>
                    </div>
                </div>
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