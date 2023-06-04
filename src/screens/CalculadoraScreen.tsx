import React from 'react';
import {Text, View} from 'react-native';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
  return (
    <View style={ styles.calculadoraContainer}>
      <Text style={ styles.textHistorial }>1,500.00</Text>
      <Text style={ styles.textResultado }>1,500.00</Text>
    </View>
  );
};

export default CalculadoraScreen;
