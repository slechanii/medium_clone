import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import NewArticle from './components/NewArticle'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/write_article" component={NewArticle} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))