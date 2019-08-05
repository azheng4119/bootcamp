import React from 'react';
import AppView from "./AppView";
import './App.css';
import { connect } from "react-redux";
import { decrement, increment } from './Store/utilities/counter';

class AppContainer extends React.Component {
  render() {
    return (
      <AppView counter={this.props.counter} incrementCounter={this.props.incrementCounter} decrementCounter={this.props.decrementCounter}></AppView>
    )
  }
}

const mapState = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatch = (dispatch) => {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement())
  }
}

export default connect(mapState, mapDispatch)(AppContainer);
