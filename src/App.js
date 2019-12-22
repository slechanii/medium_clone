import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Article from './components/Article';
import { Button } from 'semantic-ui-react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Articles: [],
        };
        // Article = Article
        this.refreshPosts();
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
            return <Article title={article.title} category={article.category} description={article.description}
                id={article.id} date={article.date} likes={article.likes}/>
        });

        return (

            
            <div class="ui two column centered row">
            

            
                <div class="column">
                <a href="/write_article">
                    <Button color="blue">Write new Article</Button>
                </a>
                </div>              
                <div className="column ">
                Click on an article to read it  
                    {articles}
                </div>
            </div>
        );
    }


};



export default App;
