import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppLoading } from 'expo';
import { Audio } from "expo-av";
import * as Font from 'expo-font';

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

const soundNames = {
  "bass1": "bass",
  "bass2": "bass",
  "bass3": "bass",
  "cymbal1": "cymbal",
  "cymbal2": "cymbal",
  "drumstick": "drumstick",
  "hihat": "hihat",
  "snare": "snare",
  "tom": "tom",
}

const colors = {
  "bass": "#6CC2BD",
  "cymbal": "#5A809E",
  "drumstick": "#7C79A2",
  "hihat": "#F57D7C",
  "snare": "#FFC1A6",
  "tom": "#FEE4C4",
}

let customFonts = {
  'Epilogue': require('./assets/fonts/Epilogue-VariableFont_wght.ttf'),
  'Epilogue-Bold': require('./assets/fonts/Epilogue-Bold.ttf')
}

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
    lastClicked: ""
  }

  _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  onDrumPress = (type) => {
    this.playSound(type);
    this.setState({ lastClicked: soundNames[type] });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

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
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              onPress={(sound) => this.onDrumPress("bass1")}
              style={[{
                backgroundColor: colors["bass"]
              }, styles.button]}>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={(sound) => this.onDrumPress("bass2")}
              style={[{
                backgroundColor: colors["bass"]
              }, styles.button]}>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={(sound) => this.onDrumPress("bass3")}
              style={[{
                backgroundColor: colors["bass"]
              }, styles.button]}>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
  
          <TouchableOpacity
              onPress={(sound) => this.onDrumPress("cymbal1")}
              style={[{
                backgroundColor: colors["cymbal"]
              }, styles.button]}>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={(sound) => this.onDrumPress("cymbal1")}
              style={[{
                backgroundColor: colors["cymbal"]
              }, styles.button]}>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={(sound) => this.onDrumPress("drumstick")}
              style={[{
                backgroundColor: colors["drumstick"]
              }, styles.button]}>
            </TouchableOpacity>
  
          </View>
          <View style={styles.rowContainer}>
  
          <TouchableOpacity
              onPress={(sound) => this.onDrumPress("hihat")}
              style={[{
                backgroundColor: colors["hihat"]
              }, styles.button]}>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={(sound) => this.onDrumPress("snare")}
              style={[{
                backgroundColor: colors["snare"]
              }, styles.button]}>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={(sound) => this.onDrumPress("tom")}
              style={[{
                backgroundColor: colors["tom"]
              }, styles.button]}>
            </TouchableOpacity>
  
          </View>
          <Text style={styles.title}>{this.state.lastClicked}</Text>
        </View>
      )
    } else {
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: "center",
    marginTop: 50,
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
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#4f4f4f",
    fontFamily: 'Epilogue-Bold',
    height: 30
  }
});
