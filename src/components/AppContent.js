import React, { Component } from 'react';
import '../App.css';

class AppContent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        text: this.props.text,
        display: false,
        ContentShow: "Content-hide"
    }
  }
  render() {
    return (
      <div className="react-app-content">
        <span onClick={this.handleMouseClick.bind(this)}>{this.state.text}</span>
        <p className={this.state.ContentShow}>我是否显示</p>
      </div>
    );
  }

  componentWillMount() {
    if(this.state.display) {
       this.setState({
          ContentShow: "Content-show"
       })
    }
    console.log("willMount");
  }

  componentDidMount() {
    console.log("DidMount");
  }


  handleMouseClick(e) {
    this.setState({
       text: '你好世界',
       ContentShow: "Content-show"
    })
  }
}

export default AppContent;
