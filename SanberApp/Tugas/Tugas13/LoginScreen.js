import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.containerView}>
          <Image source={require("./Image/logo.png")} />
          <Text style={styles.logintext}>Login</Text>
          <View style={styles.forminput}>
            <Text style={styles.formtext}>Username</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.forminput}>
            <Text style={styles.formtext}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <View style={styles.kotaklogin}>
            <TouchableOpacity style={styles.btlogin}>
              <Text style={styles.textbt}>Masuk</Text>
            </TouchableOpacity>
            <Text style={styles.atautext}>Atau</Text>
            <TouchableOpacity style={styles.btreg}>
              <Text style={styles.textbt}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    backgroundColor: "white",
    marginTop: 63,
    alignItems: "center",
    flex: 1,
  },
  logintext: {
    fontSize: 24,
    marginTop: 63,
    textAlign: "center",
    color: "#003366",
    marginVertical: 20,
  },
  formtext: {
    color: "#003366",
  },
  atautext: {
    fontSize: 20,
    color: "#3ec6ff",
    textAlign: "center",
  },
  forminput: {
    marginHorizontal: 30,
    marginVertical: 5,
    alignContent: "center",
    width: 294,
  },
  input: {
    height: 40,
    borderColor: "#003366",
    borderWidth: 1,
    borderRadius: 10,
  },
  btlogin: {
    alignItems: "center",
    backgroundColor: "#3ec6ff",
    padding: 10,
    borderRadius: 16,
    marginHorizontal: 30,
    marginBottom: 10,
    width: 140,
  },
  btreg: {
    alignItems: "center",
    backgroundColor: "#003366",
    textDecorationColor: "#000",
    padding: 10,
    borderRadius: 16,
    marginHorizontal: 30,
    marginTop: 10,
    width: 140,
  },
  textbt: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  kotaklogin: {
    marginTop: 20,
    alignItems: "center",
  },
});
