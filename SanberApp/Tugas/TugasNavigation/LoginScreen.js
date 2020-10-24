import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.push("Login")}>
          <Text>Login Screen</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('About', { name: 'Mukhlis' })}>
         <Text>About Screen</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 4,
            backgroundColor: "yellow",
          }}
          onPress={() =>
            this.props.navigation.navigate("App", {
              screen: "Home",
              params: { screen: "Skill", params: { test: "Mukhlis" } },
            })
          }
        >
          <Text>Menuju Skill Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
