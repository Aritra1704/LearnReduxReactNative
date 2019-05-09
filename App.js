/**
 * Sample Redux React Native App
 * https://www.youtube.com/watch?v=KcC8KZ_Ga2M
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStore} from 'redux'
import CounterApp from './src/CounterApp'
import {Provider} from 'react-redux'

const initialState = {
  counter: 0
}

// const reducer = () => {

// }
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER':
      return{counter: state.counter + 1}
    case 'DECREASE_COUNTER':
      return{counter: state.counter - 1}
  }
  return state
}
const stores = createStore(reducer)
export default class App extends Component {
  
  render() {
    return (
      <Provider store={stores}>
        <CounterApp/>
      </Provider>
    );
  }
}