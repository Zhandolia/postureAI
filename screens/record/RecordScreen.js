import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function RecordScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera?.Constants?.Type?.back || null);

  useEffect(() => {
    console.log(Camera.Constants); // Debugging log

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync(); // Requesting camera permission
      console.log('Camera permission status:', status); // Logging permission status
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Loading...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {type ? (
        <Camera style={styles.camera} type={type} />
      ) : (
        <Text>Error loading camera type</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
});