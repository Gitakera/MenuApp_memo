import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

// Make sure these screen components exist and are properly exported
import HomeScreen from '../screens/HomeScreen';
import VideoScreen from '../screens/VideoScreen';
import AddScreen from '../screens/AddScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SaveScreen from '../screens/SaveScreen';

console.log(HomeIcon);
// SVG icons (ensure react-native-svg is properly configured)
import HomeIcon from '../assets/images/home_outline.svg';
import VideoIcon from '../assets/images/mingcute_video-line.svg';
import AddIcon from '../assets/images/icon-park-outline_add.svg';
import NotificationIcon from '../assets/images/mi_notification.svg';
import SaveIcon from '../assets/images/mi_save.svg';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // Use the color and size from props for consistency
          const iconColor = focused ? '#007bff' : '#999';
          const iconSize = size || 24;

          switch (route.name) {
            case 'Home':
              return <HomeIcon width={iconSize} height={iconSize} fill={iconColor} />;
            case 'Video':
              return <VideoIcon width={iconSize} height={iconSize} fill={iconColor} />;
            case 'Add':
              return <AddIcon width={iconSize} height={iconSize} fill={iconColor} />;
            case 'Notification':
              return <NotificationIcon width={iconSize} height={iconSize} fill={iconColor} />;
            case 'Save':
              return <SaveIcon width={iconSize} height={iconSize} fill={iconColor} />;
            default:
              return <View style={{ width: iconSize, height: iconSize }} />;
          }
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#999',
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Video" 
        component={VideoScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Add" 
        component={AddScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Notification" 
        component={NotificationScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Save" 
        component={SaveScreen} 
        options={{ title: '' }} 
      />
    </Tab.Navigator>
  );
}