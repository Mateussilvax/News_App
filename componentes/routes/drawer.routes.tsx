import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import TelaSobre from '../screens/TelaSobre';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen
        name="Notícias"
        component={TabRoutes}
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
  );
}
