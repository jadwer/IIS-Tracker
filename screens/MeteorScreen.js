import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MeteorScreen extends Component {
  render() {
    return (
        <View
        style={{
            flewx:1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>
            ¡Pantalla de meteoritos!
            </Text>
        </View>
    )
  }
}

export default MeteorScreen