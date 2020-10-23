import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Wrapper from './wrapper.navigator';
import { Home, Details } from './../modules';

export default class Root extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();

    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={props => <Wrapper {...props} Page={Home} />}
              options={{ header: _ => null }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}