import React, { Component } from 'react';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(props) {
        return (
            <div className="Article" >
                <p>{this.props.category}</p>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>{this.props.date}</p>
            </div>
        );
    };

}

export default Article;