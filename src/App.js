import React, { Component } from 'react';
import './App.css';

import axios from "axios";
import ArticleView from './components/ArticleView';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Articles: [],
        };
        // Article = Article

    }
    componentWillMount() {
        this.refreshPosts();
      
    }
    refreshPosts = () => {
        //   alert("refresh");
        axios
            .get("http://127.0.0.1:8000/api/articles/")
            .then(res => this.setState({ Articles: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        const articles = this.state.Articles.map(function (article) {
            return <ArticleView title={article.title} category={article.category} description={article.description}
                date={article.date} />
        });

        return (
            <div>
                <a href="/write_article">
                <button onClick={this.writeNewArticle}>Write new Article</button>
                </a>
                <div className="Articles">
                    {articles}
                </div>
            </div>
        );
    }


};



export default App;
