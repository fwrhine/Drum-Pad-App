import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Audio } from "expo-av";

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
  playSound = async drumKitSound => {
    try {
      const soundObject = new Audio.Sound()

      const path = drumKit[drumKitSound]
      await soundObject.loadAsync(path)
      await soundObject.playAsync().then(status => {
        console.log(status)
        
        // Unload sound from memory
        setTimeout(() => {
          soundObject.unloadAsync().then(status => {
            console.log(status)
          })
        }, status.durationMillis);
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={()=>{
              this.playSound("bass1")
            }}
            style={[{
              backgroundColor: colors["bass"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("bass2")
            }}
            style={[{
              backgroundColor: colors["bass"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("bass3")
            }}
            style={[{
              backgroundColor: colors["bass"]
            }, styles.button]}>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>

        <TouchableOpacity
            onPress={()=>{
              this.playSound("cymbal1")
            }}
            style={[{
              backgroundColor: colors["cymbal"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("cymbal2")
            }}
            style={[{
              backgroundColor: colors["cymbal"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("drumstick")
            }}
            style={[{
              backgroundColor: colors["drumstick"]
            }, styles.button]}>
          </TouchableOpacity>

        </View>
        <View style={styles.rowContainer}>

        <TouchableOpacity
            onPress={()=>{
              this.playSound("hihat")
            }}
            style={[{
              backgroundColor: colors["hihat"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("snare")
            }}
            style={[{
              backgroundColor: colors["snare"]
            }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("tom")
            }}
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
    justifyContent: "center"
  },
  rowContainer: {
    flexDirection: "row"
  },
  button: {
    flex: 1,
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 10
  }
});
