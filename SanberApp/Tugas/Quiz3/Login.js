import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{marginBottom: 37}}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.SignInText}>Sign in to Continue</Text>
      </View>
     
      <View style={styles.kotak}>
        <View style={{marginHorizontal: 16}}>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.inputText} />
          <View style={styles.line} />
        </View>
        <View style={{marginHorizontal: 16}}>
          <Text style={styles.text}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.inputText} />
          <View style={styles.line} />
          <TouchableOpacity style={{marginTop: 10, marginBottom: 20}}>
            <Text style={{textAlign: 'right'}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 20}}>
            <TouchableOpacity style={styles.SignInBt}>
              <Text style={styles.masukText} onPress={() => navigation.push('Home')}>Sign In</Text>
            </TouchableOpacity>
          <View style={{alignItems: 'center', marginVertical: 30}}>
            <Text>-OR-</Text>
          </View>
          <View
            style={styles.anotherSignIn}>
            <TouchableOpacity style={styles.socmed}>
              <FontAwesome5 name="facebook" size={16} color='#4267B2' />
              <Text style={{marginLeft: 5}}>Facebook </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socmed}>
              <FontAwesome5 name="google" size={16} color='#4285F4'/>
              <Text style={{marginLeft: 5}}>Google </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:15,
    paddingVertical:20,
    marginTop:60
  },
  welcome: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#0C0423',
  },
  SignInText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: '#4D4D4D',
  },
  kotak: {
    flex: 1,
    borderRadius: 3,
    shadowColor: '#000',   
    paddingVertical: 30,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  text: {
    marginTop: 10,
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: '#4D4D4D',
  },
  inputText: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    color: '#4C475A',
  },
  line: {
    height: 2,
    backgroundColor: '#E6EAEE',
  },
  SignInBt:{
    backgroundColor: '#F77866',
    height: 50,
    width: 300,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  masukText:{
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 14,
    color:'#FFFFFF'
  },
  anotherSignIn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  socmed: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E6EAEE',
    flexDirection: 'row',
  },
  iconfb:{color:'#4267B2'}
});

