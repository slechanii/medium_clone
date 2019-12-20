import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Article from "./components/Article";
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
    renderArticles = () => {
        let articles = this.state.Articles;
        // alert(articles[0].title);



    }
    render() {
        const renderItems = this.state.Articles.map(function (item) {
            return <ArticleView title={item.title}/>
        });

        return (
            <ul className="FetchDemo">
                {renderItems}
            </ul>
        );
    }


};



export default App;
