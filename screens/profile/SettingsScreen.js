import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [language, setLanguage] = useState('English');
  const [units, setUnits] = useState('Metric');
  const [theme, setTheme] = useState('Use Device Settings');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Spanish' : 'English'));
  };

  const toggleUnits = () => {
    setUnits((prevUnits) => (prevUnits === 'Metric' ? 'Imperial' : 'Metric'));
  };

  const chooseTheme = () => {
    Alert.alert(
      "Choose Theme",
      "Select the app display theme:",
      [
        { text: "Black", onPress: () => setTheme("Black") },
        { text: "White", onPress: () => setTheme("White") },
        { text: "Use Device Settings", onPress: () => setTheme("Use Device Settings"), style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>
      
      <TouchableOpacity style={styles.setting} onPress={toggleLanguage}>
        <Text style={styles.settingText}>Language</Text>
        <Text style={styles.unitText}>{language}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.setting} onPress={toggleUnits}>
        <Text style={styles.settingText}>Units</Text>
        <Text style={styles.unitText}>{units}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.setting} onPress={chooseTheme}>
        <Text style={styles.settingText}>Theme</Text>
        <Text style={styles.unitText}>{theme}</Text>
      </TouchableOpacity>
    </View>
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
  setting: {
    backgroundColor: '#F4F6F8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    color: '#636165',
  },
  unitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F34533',
  },
});

export default SettingsScreen;
