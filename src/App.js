import React, { Component, Fragment } from 'react';
import axiox from 'axios';
import './App.css'
// import { CSSTransition } from 'react-transition-group'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({
      show: !this.state.show
    })
  }
  
  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>
          hello
        </div>
        <button onClick={this.handleToggle}>
          toggle
        </button>
      </Fragment>
    );
  }
  componentDidMount () {
    axiox.get('/api/todolist').then(res => {
      console.log(res)
    })
  }
}

export default App;
