import React from 'react';
import { Platform, StyleSheet, Text, View,Button, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image } from 'react-native';

const Register = ({navigation}) => {
    return (
        <KeyboardAvoidingView
        behavior = {Platform.OS == 'ios' ? "padding": 'height'}
        style={styles.container}>

        <ScrollView>
              <View style={styles.container}>
                <View style={{marginBottom: 37}}>
                  <Text style={styles.welcome}>Welcome</Text>
                  <Text style={styles.signupText}>Sign up to Continue</Text>
                </View>
                
                <View style={styles.box}>
                  <View style={{marginHorizontal: 16}}>
                    <Text style={styles.text}>Name</Text>
                    <TextInput style={styles.inputText} />
                    <View style={styles.line} />
                  </View>
                  <View style={{marginHorizontal: 16}}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput style={styles.inputText} />
                    <View style={styles.line} />
                  </View>
                  <View style={{marginHorizontal: 16}}>
                    <Text style={styles.text}>Phone number</Text>
                    <TextInput style={styles.inputText} />
                    <View style={styles.line} />
                  </View>
                  <View style={{marginHorizontal: 16}}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.inputText} />
                    <View style={styles.line} />
                  </View>
                  <View style={{margin: 20}}>
                    <TouchableOpacity style={styles.SignUpBt}>
                      <Text style={styles.DaftarText} onPress={() => navigation.push('Login')}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.question}> Already have an account?
                      <TouchableOpacity onPress={() => navigation.push('Login')}>
                        <Text style={styles.SigninBt}> {' '} Sign in</Text>
                      </TouchableOpacity>
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>  
        </KeyboardAvoidingView>
    );
}
export default Register;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 20,
    marginTop: 45,
  },
  welcome: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 30,
    color: "#0C0423",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  signupText: {
    fontFamily: "Montserrat",
    fontSize: 12,
    color: "#4D4D4D",
  },
  box: {
    flex: 1,
    paddingTop: 10,
    borderRadius:2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text: {
    marginTop: 10,
    fontFamily: "Montserrat",
    fontSize: 12,
    color: "#4D4D4D",
  },
  inputText: {
    fontFamily: "Montserrat",
    fontSize: 15,
    color: "#4C475A",
  },
  line: {
    height: 2,
    backgroundColor: "#E6EAEE",
  },
  SignUpBt: {
    backgroundColor: "#F77866",
    height: 50,
    width: 300,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  DaftarText: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 14,
    color: "#FFFFFF",
  },
  question: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 12,
    marginTop: 10,
  },
  SigninBt: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 10,
    color: "#F77866",
  },
});
