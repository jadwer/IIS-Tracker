import React, { Component } from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import IssInfo from "./IssInfo";

export class IssLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    this.getIssLocation();
  }

  getIssLocation = () => {
    axios
      .get("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => {
        this.setState({ location: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View
          stye={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>... Cargando, por favor espere</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require("../assets/meteor_bg3.png")}
            style={styles.backgroundImage}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Localizacón de la ISS</Text>
            </View>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                region={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                  latitudeDelta: 100,
                  longitudeDelta: 100,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: this.state.location.latitude,
                    longitude: this.state.location.longitude,
                  }}
                >
                  <Image
                    source={require("../assets/iss_icon.png")}
                    style={{ height: 50, width: 50 }}
                  />
                </Marker>
              </MapView>
            </View>
                <IssInfo />
          </ImageBackground>
        </View>
      );
    }
  }
}
export default IssLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "auto",
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  mapContainer: {
    flex: 0.6,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
