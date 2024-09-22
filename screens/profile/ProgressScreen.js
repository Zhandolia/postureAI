import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProgressScreen = () => {
  const progressData = [
    { label: 'Workouts Completed', value: 45 },
    { label: 'Personal Records', value: 'Bench Press: 200 lbs' },
    { label: 'Weight Change', value: '-5 lbs' },
    { label: 'Cardio Distance', value: '50 miles' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>
      {progressData.map((item, index) => (
        <View key={index} style={styles.progressContainer}>
          <Text style={styles.progressLabel}>{item.label}</Text>
          <Text style={styles.progressValue}>{item.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1D1C1F',
    marginBottom: 20,
    textAlign: 'center',
  },
  progressContainer: {
    backgroundColor: '#F4F6F8',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  progressLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#636165',
  },
  progressValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F34533',
  },
});

export default ProgressScreen;
