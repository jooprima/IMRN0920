import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component from './Tugas/Tugas12/App';
import YoutubeUI from './Tugas/Tugas12/App';
import LoginScreen from './Tugas/Tugas13/LoginScreen';
import AboutScreen from './Tugas/Tugas13/AboutScreen';
import ToDoApps from './Tugas/Tugas14/App';
import SkillScreen from './Tugas/Tugas14/SkillScreen';

export default function App() {
  return (
    // <LoginScreen />
    // <AboutScreen />
    // <ToDoApps />
    <SkillScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
