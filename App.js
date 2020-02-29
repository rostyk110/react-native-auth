import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';
import { Authentication } from './src/navigation/Authentication';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Authentication />
    </Provider>
  );
}
