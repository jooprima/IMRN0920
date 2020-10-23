import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default class LoginScreen extends Component{
    render(){
        return (
          <View style={styles.constainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.push("Login")}
            >
              <Text>Login Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                paddingHorizontal: 16,
                paddingVertical: 4,
                backgroundColor: "yellow",
              }}
              onPress={() =>
                this.props.navigation.navigate("App", {
                  screen: "Home",
                  params: { screen: "Skill", params: { test: "Yohanes" } },
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
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
