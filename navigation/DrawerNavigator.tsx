import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SidebarMenu from '../components/SidebarMenu';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SidebarMenu {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="MainStack" component={StackNavigator} />
    </Drawer.Navigator>
  );
}
