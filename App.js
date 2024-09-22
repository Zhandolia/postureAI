import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/home/HomeScreen';
import RecordScreen from './screens/record/RecordScreen';
import UploadScreen from './screens/upload/UploadScreen';
import VideoUploadScreen from './screens/upload/VideoUploadScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import WorkoutHistoryScreen from './screens/profile/WorkoutHistoryScreen';
import BodyAreasTargetedScreen from './screens/profile/BodyAreasTargeted';
import ProgressScreen from './screens/profile/ProgressScreen';
import SettingsScreen from './screens/profile/SettingsScreen';

// Create a Stack Navigator for Upload-related screens
const UploadStack = createStackNavigator();

function UploadStackScreen() {
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen
        name="Upload"
        component={UploadScreen}
        options={{ headerShown: false }}
      />
      <UploadStack.Screen
        name="VideoUpload"
        component={VideoUploadScreen}
        options={{ headerShown: false }}
      />
    </UploadStack.Navigator>
  );
}

// Create a Stack Navigator for Profile-related screens
const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }} // Hide header for the main profile screen
      />
      <ProfileStack.Screen
        name="WorkoutHistory"
        component={WorkoutHistoryScreen}
        options={{ headerTitle: '' }}
      />
      <ProfileStack.Screen
        name="BodyAreasTargeted"
        component={BodyAreasTargetedScreen}
        options={{ headerTitle: '' }}
      />
      <ProfileStack.Screen
        name="Progress"
        component={ProgressScreen}
        options={{ headerTitle: '' }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerTitle: '' }}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Record') {
              iconName = 'camera-outline';
            } else if (route.name === 'Upload') {
              iconName = 'cloud-upload-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F34533',
          tabBarInactiveTintColor: '#636165',
          tabBarStyle: { backgroundColor: '#F4F6F8' },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Record" component={RecordScreen} />
        <Tab.Screen name="Upload" component={UploadStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
