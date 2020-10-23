import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export class ProjectScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.push("Login")}>
          <Text>Project Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export class AddScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.push("Login")}>
          <Text>Add Screen</Text>
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
