import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const drumKit = {
  "bass1": require("./assets/drum_sounds/bass1.mp3"),
  "bass2": require("./assets/drum_sounds/bass2.mp3"),
  "bass3": require("./assets/drum_sounds/bass3.mp3"),
  "cymbal1": require("./assets/drum_sounds/cymbal1.mp3"),
  "cymbal2": require("./assets/drum_sounds/cymbal2.mp3"),
  "drumstick": require("./assets/drum_sounds/drumstick.mp3"),
  "hihat": require("./assets/drum_sounds/hihat.mp3"),
  "snare": require("./assets/drum_sounds/snare.mp3"),
  "tom": require("./assets/drum_sounds/tom.mp3"),
}

const colors = {
  "bass": "#6CC2BD",
  "cymbal": "#5A809E",
  "drumstick": "#7C79A2",
  "hihat": "#F57D7C",
  "snare": "#FFC1A6",
  "tom": "#FEE4C4",
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={()=>{}}
            style={[{
              backgroundColor: colors["bass"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{}}
            style={[{
              backgroundColor: colors["bass"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{}}
            style={[{
              backgroundColor: colors["bass"]
            }, styles.button]}>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>

        <TouchableOpacity
            onPress={()=>{}}
            style={[{
              backgroundColor: colors["cymbal"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{}}
            style={[{
              backgroundColor: colors["cymbal"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{}}
            style={[{
              backgroundColor: colors["drumstick"]
            }, styles.button]}>
          </TouchableOpacity>

        </View>
        <View style={styles.rowContainer}>

        <TouchableOpacity
            onPress={()=>{}}
            style={[{
              backgroundColor: colors["hihat"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{}}
            style={[{
              backgroundColor: colors["snare"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{}}
            style={[{
              backgroundColor: colors["tom"]
            }, styles.button]}>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    marginTop: 100,
  },
  rowContainer: {
    flexDirection: "row"
  },
  button: {
    flex: 1,
    height: 100,
    margin: 10,
    borderRadius: 10
  }
});
