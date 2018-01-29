import React, { Component } from 'react';
import AppContent from './components/AppContent';
import AppAntdTest from './components/AppAntdTest';
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
        <AppAntdTest>
          <AppContent text="hello world"></AppContent>
        </AppAntdTest>
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
