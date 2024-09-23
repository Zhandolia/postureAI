import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
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

// Custom Header with Back Button
const HeaderWithBackButton = ({ navigation, title }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Icon name="arrow-back" size={24} color="#F34533" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="WorkoutHistory"
        component={WorkoutHistoryScreen}
        options={({ navigation }) => ({
          header: () => <HeaderWithBackButton navigation={navigation} title="Workout History" />,
        })}
      />
      <ProfileStack.Screen
        name="BodyAreasTargeted"
        component={BodyAreasTargetedScreen}
        options={({ navigation }) => ({
          header: () => <HeaderWithBackButton navigation={navigation} title="Body Areas Targeted" />,
        })}
      />
      <ProfileStack.Screen
        name="Progress"
        component={ProgressScreen}
        options={({ navigation }) => ({
          header: () => <HeaderWithBackButton navigation={navigation} title="Progress" />,
        })}
      />
      <ProfileStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          header: () => <HeaderWithBackButton navigation={navigation} title="Settings" />,
        })}
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F9FAFB',
    borderBottomWidth: 1,
    borderBottomColor: '#F4F6F8',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F9FAFB',
  },
});
