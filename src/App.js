import React, { Component } from 'react';
import AppContent from './components/AppContent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      logo: 'App-logo2'
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className={this.state.logo} alt="logo" onMouseEnter = {this.handleMouseEnter.bind(this)} onMouseLeave = {this.handleMouseLeave.bind(this)}/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AppContent text="hello world"></AppContent>
      </div>
    );
  }

  handleMouseEnter(e) {
    this.setState({
       logo: 'App-logo'
    })
  }

  handleMouseLeave(e) {
    this.setState({
       logo: 'App-logo2'
    })
  }
}

export default App;
