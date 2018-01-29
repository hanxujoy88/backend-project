import React, { Component } from 'react';

class AppContent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        text: this.props.text
    }
  }
  render() {
    return (
      <div className="react-app-content">
        <span onClick={this.handleMouseClick.bind(this)}>{this.state.text}</span>
      </div>
    );
  }


  handleMouseClick(e) {
    this.setState({
       text: '你好世界'
    })
  }
}



export default AppContent;
