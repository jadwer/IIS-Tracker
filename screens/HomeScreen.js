import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
        <ImageBackground
          resizeMode="cover"
          source={require("../assets/bg.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Aplicación Ratreador de la EEI</Text>
          </View>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("IssLocation")}
          >
            <Text style={styles.routeText}>Localización de la EEI</Text>
            <Text style={styles.knowMore}>{"Más información --->"}</Text>
            <Image
              source={require("../assets/iss_icon.png")}
              style={styles.iconImagen}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("Meteors")}
          >
            <Text style={styles.routeText}>Meteoritos</Text>
            <Text style={styles.knowMore}>{"Más información --->"}</Text>
            <Image
              source={require("../assets/meteor_icon.png")}
              style={styles.iconImagen}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("Updates")}
          >
            <Text style={styles.routeText}>Actualizaciones</Text>
            <Image
              source={require("../assets/rocket_icon.png")}
              style={styles.iconImagen}
            ></Image>
            <Text style={styles.knowMore}>{"Más información --->"}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: "white",
  },
  routeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginTop: 40,
    paddingLeft: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  iconImagen: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80,
  },
});
