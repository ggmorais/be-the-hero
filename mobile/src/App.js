import React, { useEffect } from 'react';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

// import SplashScreen from 'react-native-splash-screen';

import Routes from './routes';

export default function App() {
 
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <Routes />
  );
}