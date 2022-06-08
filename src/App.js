import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import RootNavigator from './navigations/RootNavigator';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
