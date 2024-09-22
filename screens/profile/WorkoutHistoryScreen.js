// src/screens/WorkoutHistoryScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const historyData = [
  { id: '1', date: '2024-09-18', result: 'Improved posture' },
  { id: '2', date: '2024-09-17', result: 'Needs improvement' },
  { id: '3', date: '2024-09-16', result: 'Good form' },
];

const WorkoutHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout History</Text>
      <FlatList
        data={historyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.date}</Text>
            <Text>{item.result}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default WorkoutHistoryScreen;
