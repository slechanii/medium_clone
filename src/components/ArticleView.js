import React, { Component } from 'react';

class ArticleView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
   
    render(props) {
        return (
            <div className="ArticleView" >
            ARTICLE VIEW
            <p>{this.props.category}</p>
            <p>{this.props.title}</p>
            <p>{this.props.description}</p>
            <p>{this.props.date}</p>
            </div>
        );
    };

}

export default ArticleView;