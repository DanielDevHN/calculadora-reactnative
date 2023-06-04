import React from 'react';
import { SafeAreaView } from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';

import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={ styles.fondo }>
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
