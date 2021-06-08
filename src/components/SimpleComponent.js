// Code SimpleComponent Here

import React from 'react';

class SimpleComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            mood: "happy"
        }
    }

    handleOnClick = event => {
      const newMood = this.state.mood === "happy" ? "sad" : "happy";
      this.setState({mood: newMood})
    }

    render() {
        return<div onClick={this.handleOnClick}>{this.state.mood}</div>
    }

}

export default SimpleComponent;