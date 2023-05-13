import React, { Component } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import axios from "axios";

export class IssInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
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

  componentDidMount() {
    this.getIssLocation();
    try {
      setInterval(async () => {
        this.getIssLocation();
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  }

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
<View style={styles.infoContainer}>
<Text style={styles.infoText}>Latitud: {this.state.location.latitude} </Text>
<Text style={styles.infoText}>Longitud: {this.state.location.longitude} </Text>
<Text style={styles.infoText}>Altitud(Km): {this.state.location.altitude} </Text>
<Text style={styles.infoText}>Velocidad(Km/h): {this.state.location.velocity} </Text>
</View>
      );
    }
  }
}

export default IssInfo;

const styles = StyleSheet.create({
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
})