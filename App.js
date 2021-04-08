import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyAEXlTVZnu9a9PYgQTGUdLh_XAgobHA3Dc",
  authDomain: "mealstogo-pg.firebaseapp.com",
  projectId: "mealstogo-pg",
  storageBucket: "mealstogo-pg.appspot.com",
  messagingSenderId: "971158119643",
  appId: "1:971158119643:web:1bf6516b5af4e7589258fe",
  measurementId: "G-GHY3GKH3FC",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
