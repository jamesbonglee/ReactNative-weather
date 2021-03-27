import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
   return (
      <View style={styles.container}>
         <View style={styles.greenView}>{/* <Text>Hello</Text> */}</View>
         <View style={styles.redView}>{/* <Text>Hello</Text> */}</View>
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "grey",
      // alignItems: "center",
      justifyContent: "center",
   },
   greenView: {
      flex: 1,
      backgroundColor: "green",
   },
   redView: {
      flex: 1,
      backgroundColor: "red",
   },
});
