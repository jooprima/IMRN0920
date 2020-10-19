import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component from './Tugas/Tugas12/App';
import YoutubeUI from './Tugas/Tugas12/App';
import LoginScreen from './Tugas/Tugas13/LoginScreen';
import AboutScreen from './Tugas/Tugas13/AboutScreen';
import RegisterScreen from './Tugas/Tugas13/RegsiterScreen';
import ToDoApps from './Tugas/Tugas14/App';
import SkillScreen from './Tugas/Tugas14/SkillScreen';
import Quiz3 from './Tugas/Quiz3/Splash';
import Register from './Tugas/Quiz3/Register';
import Login from './Tugas/Quiz3/Login';

export default function App() {
  return (
    // <LoginScreen />
    // <RegisterScreen />
    // <AboutScreen />
    // <ToDoApps />
    <SkillScreen />
    // <Quiz3 />
    // <Login/>
    
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
