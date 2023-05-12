import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import IssLocationScreen from "./screens/IssLocationScreen";
import MeteorScreen from "./screens/MeteorScreen";
import UpdateScreen from "./screens/UpdateScreen";

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="IssLocation" component={IssLocationScreen} />
          <Stack.Screen name="Meteors" component={MeteorScreen} />
          <Stack.Screen name="Updates" component={UpdateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
