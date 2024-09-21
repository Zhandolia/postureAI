import React from 'react';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/LoginScreen';
import LoginPage from './screens/LoginPage'; // Import LoginPage
import VerificationScreen from './screens/VerificationScreen';
import HomeScreen from './screens/HomeScreen';
import RecordScreen from './screens/RecordScreen';
import UploadScreen from './screens/UploadScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <NavigationContainer>
        <SignedIn>
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
            {/* Ensure each Tab.Navigator child is a Screen */}
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Record" component={RecordScreen} />
            <Tab.Screen name="Upload" component={UploadScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </SignedIn>

        <SignedOut>
          {/* Stack.Navigator only contains Screen components */}
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Verification" component={VerificationScreen} />
            <Stack.Screen name="LoginPage" component={LoginPage} /> {/* Ensure correct screen setup */}
          </Stack.Navigator>
        </SignedOut>
      </NavigationContainer>
    </ClerkProvider>
  );
};

export default App;
