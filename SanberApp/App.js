import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component from './Tugas/Tugas12/App';
import YoutubeUI from './Tugas/Tugas12/App';
import SanberApp from './Tugas/Tugas13/Login';
import About from './Tugas/Tugas13/About';
import LoginScreen from './Tugas/Tugas13/LoginScreen';
import AboutScreen from './Tugas/Tugas13/AboutScreen';

export default function App() {
  return (
    // <LoginScreen />
    <AboutScreen />
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
