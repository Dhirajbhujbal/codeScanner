import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BluetoothCmp } from './src/pages/bluetooth.root';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './src/navigator/app-navigator';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AppMainReducer } from './src/store/Reducer/app.reducer';

let AppContainer

const store = createStore(AppMainReducer, applyMiddleware(thunk));


export class App extends Component {

  constructor() {
    super();
    AppContainer = createAppContainer(AppNavigator.Nav())
  }

  render() {
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }

}