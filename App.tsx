import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainNavigation from './Src/Navigation/MainNavigation';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import store, { persistor } from './Src/Screen/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>  
      <PersistGate loading={null} persistor={persistor}>  
        <MainNavigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
