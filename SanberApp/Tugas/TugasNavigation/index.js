import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "./LoginScreen";
import AboutScreen from "./AboutScreen";
import SkillScreen from "./SkillScreen";
import { ProjectScreen, AddScreen } from "./OtherScreen";

const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Skill"
      component={SkillScreen}
      options={{ title: "Test1" }}
    />
    <Tabs.Screen name="Project" component={ProjectScreen} />
    <Tabs.Screen name="Add" component={AddScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="App" component={DrawerScreen} />
  </RootStack.Navigator>
);

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    );
  }
}
