import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaTecnologia from '../screens/TelaTecnologia';
import TelaEsportes from '../screens/TelaEsportes';
import TelaDetalhes from '../screens/TelaDetalhes';

const Stack = createNativeStackNavigator();

export function StackTecnologia() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaTecnologia"
        component={TelaTecnologia}
        options={{ title: 'Tecnologia' }}
      />
      <Stack.Screen name="Detalhes" component={TelaDetalhes} />
    </Stack.Navigator>
  );
}

export function StackEsportes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaEsportes"
        component={TelaEsportes}
        options={{ title: 'Esportes' }}
      />
      <Stack.Screen name="Detalhes" component={TelaDetalhes} />
    </Stack.Navigator>
  );
}
