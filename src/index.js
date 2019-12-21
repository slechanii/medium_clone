import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import NewArticle from './components/NewArticle'
import ArticleView from './components/ArticleView';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/write_article" component={NewArticle} />
      <Route path="/read_article/:articleId" component={ArticleView} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))