import React from 'react';
import {StyleSheet, View} from 'react-native';
import Routes from './navigation';
import {configure} from 'mobx';
import {AppContextProvider} from 'context/App';

configure({
  enforceActions: 'never',
});

const App = () => {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
