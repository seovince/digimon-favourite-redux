import * as React from 'react';
import { View, Text } from 'react-native';
import RootScreen from './screens/RootScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { Provider } from 'react-redux'
import configureStore from './redux/store'

const store = configureStore()


function App() {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <RootScreen />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;