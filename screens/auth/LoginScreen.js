import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const { isLoaded, signUp } = useSignUp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleEmailSignUp = async () => {
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: email,
        password: password,
        username: 'yourusername', // Optionally set the username
      });
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      navigation.navigate('Verification', { email, password });
    } catch (err) {
      console.error('Error during sign-up:', err);
      setErrorMessage('Failed to send verification code. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up for Posture.ai</Text>

      {/* Display error message if sign-up fails */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleEmailSignUp}>
        <Text style={styles.buttonText}>Sign Up with Email</Text>
      </TouchableOpacity>

      {/* Button to navigate to LoginPage */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.loginButtonText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1D1C1F',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#636165',
    borderWidth: 1,
    backgroundColor: '#F4F6F8',
  },
  button: {
    backgroundColor: '#F34533',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 20,
  },
  loginButtonText: {
    color: '#F34533',
    fontSize: 16,
  },
});

export default LoginScreen;
