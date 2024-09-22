import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function VideoUploadScreen() {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleWorkoutSelect = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleFinalize = () => {
    if (selectedWorkout) {
      alert(`Workout selected: ${selectedWorkout}`);
      // Trigger analysis logic here
    } else {
      alert('Please select a workout.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Workout</Text>

      {/* Scrollable Grid of Workout Options */}
      <ScrollView contentContainerStyle={styles.grid}>
        {/* Pushups */}
        <TouchableOpacity
          style={[
            styles.workoutContainer,
            selectedWorkout === 'pushups' && styles.selectedWorkout,
          ]}
          onPress={() => handleWorkoutSelect('pushups')}
        >
          <Image
            source={{ uri: 'https://www.3dlabz.com/medical/portfolio/anatomy-illustration/stability-exercises-1.jpg' }}
            style={styles.workoutImage}
          />
          <Text style={styles.label}>Pushups</Text>
        </TouchableOpacity>

        {/* Pullups */}
        <TouchableOpacity
          style={[
            styles.workoutContainer,
            selectedWorkout === 'pullups' && styles.selectedWorkout,
          ]}
          onPress={() => handleWorkoutSelect('pullups')}
        >
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
            style={styles.workoutImage}
          />
          <Text style={styles.label}>Pullups</Text>
        </TouchableOpacity>

        {/* Squats */}
        <TouchableOpacity
          style={[
            styles.workoutContainer,
            selectedWorkout === 'squats' && styles.selectedWorkout,
          ]}
          onPress={() => handleWorkoutSelect('squats')}
        >
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
            style={styles.workoutImage}
          />
          <Text style={styles.label}>Squats</Text>
        </TouchableOpacity>

        {/* Lunges */}
        <TouchableOpacity
          style={[
            styles.workoutContainer,
            selectedWorkout === 'lunges' && styles.selectedWorkout,
          ]}
          onPress={() => handleWorkoutSelect('lunges')}
        >
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
            style={styles.workoutImage}
          />
          <Text style={styles.label}>Lunges</Text>
        </TouchableOpacity>

        {/* Add more exercises here with their respective images */}
      </ScrollView>

      {/* Finalize Button */}
      <TouchableOpacity style={styles.finalizeButton} onPress={handleFinalize}>
        <Text style={styles.finalizeButtonText}>Finalize</Text>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  workoutContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#F4F6F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  workoutImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#636165',
    marginTop: 5,
  },
  selectedWorkout: {
    borderWidth: 2,
    borderColor: '#F34533',
  },
  finalizeButton: {
    backgroundColor: '#F34533',
    padding: 15,
    borderRadius: 10,
  },
  finalizeButtonText: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
