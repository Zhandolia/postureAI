import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Workout History</Text>
        <Text style={styles.sectionContent}>Your past workouts will appear here.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Body Areas Targeted</Text>
        <Text style={styles.sectionContent}>See which muscles you've been focusing on.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progress</Text>
        <Text style={styles.sectionContent}>Track your progress over time.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <Text style={styles.sectionContent}>Customize your app experience.</Text>
      </View>
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
  section: {
    backgroundColor: '#F4F6F8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D1C1F',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 14,
    color: '#636165',
  },
});

export default ProfileScreen;
