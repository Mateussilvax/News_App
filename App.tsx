import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import TelaTecnologia from './componentes/TelaTecnologia';
import TelaEsportes from './componentes/TelaEsportes';
import TelaDetalhes from './componentes/TelaDetalhes';
import TelaSobre from './componentes/TelaSobre';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackTecnologia() {
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

function StackEsportes() {
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

function TabsNoticias() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Tecnologia"
        component={StackTecnologia}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hardware-chip-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Esportes"
        component={StackEsportes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
            }}
          >
            <Drawer.Screen
              name="Notícias"
              component={TabsNoticias}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="newspaper-outline" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="Sobre"
              component={TelaSobre}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons
                    name="information-circle-outline"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
