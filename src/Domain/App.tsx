import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/lib/integration/react'; 

import { SafeAreaView } from 'react-native';
import { Root as RootApp } from './navigation'
import { store, persistor } from './redux/store.config'

const THEME = {
  color: {
    default: '#e84a5f',
    primary: '#ff9a76',
    black: '#111111',
    white: '#ffffff',
    gray: '#666666',
    grayLight: '#8c8c8c',
    grayDark: '#353535',
    border: '#ddd',
    success: 'green',
    danger: 'red',
    warning: 'orange',
  },

  font: {
    family: `'Helvetica Neue', Helvetica, sans-serif`,
    size: '14px',
  },

  spacing: {
    extraSmall: '5px',
    small: '10px',
    regular: '15px',
    medium: '20px',
    large: '30px',
    extraLarge: '40px',
    xxLarge: '60px',
  },

  height: {
    navbar: '62px'
  }
};


export default class App extends React.Component {
  
  constructor(props: any) {
    super(props);
  }

  render() {
    
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={THEME}>
            <SafeAreaView style={{ flex: 1 }}>
              <RootApp />
            </SafeAreaView>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )
  }
}