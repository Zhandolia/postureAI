import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useNavigation, useRoute } from '@react-navigation/native';

const VerificationScreen = () => {
  const { isLoaded, signUp } = useSignUp();
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params; // Email is passed from the previous screen

  useEffect(() => {
    if (!signUp || !isLoaded) {
      setErrorMessage('Sign-up object is not initialized properly.');
    }
  }, [signUp, isLoaded]);

  const handleVerifyCode = async () => {
    if (!isLoaded) return;
    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === 'complete') {
        // Redirect to HomeScreen if verification is successful
        navigation.navigate('Home');
      } else {
        setErrorMessage('Invalid code. Please try again.');
      }
    } catch (err) {
      console.error('Verification failed:', err);
      setErrorMessage('Verification failed. Please check the code and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code</Text>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Input for verification code */}
      <TextInput
        style={styles.input}
        placeholder="Enter code"
        value={verificationCode}
        onChangeText={setVerificationCode}
        keyboardType="number-pad"
        autoCapitalize="none"
      />

      {/* Button to verify the code */}
      <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
        <Text style={styles.buttonText}>Verify Code</Text>
      </TouchableOpacity>

      {/* Back button to return to the LoginScreen */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
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
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#F34533',
    fontSize: 16,
  },
});

export default VerificationScreen;
