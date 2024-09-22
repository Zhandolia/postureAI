import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UploadScreen() {
  const navigation = useNavigation();

  // Dummy video URI for testing
  const mockVideoUri = 'https://www.w3schools.com/html/mov_bbb.mp4'; // Use any valid video URL

  // Navigate to VideoUploadScreen with dummy video
  const navigateToVideoUpload = () => {
    navigation.navigate('VideoUpload', { videoUri: mockVideoUri });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Your Workout Video</Text>

      {/* Bypass button for testing */}
      <TouchableOpacity style={styles.uploadButton} onPress={navigateToVideoUpload}>
        <Text style={styles.uploadButtonText}>Bypass and Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1D1C1F',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#F34533',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
