import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

// export default function App() {
//    return <Loading></Loading>;
// }

export default class extends React.Component {
   state = {
      isLoading: true,
   };
   gerLocation = async () => {
      try {
         const response = await Location.requestPermissionsAsync();
         console.log(response);
         const {
            coords: { latitude, longitude },
         } = await Location.getCurrentPositionAsync();
         //send to API and get weather , coords:{latitude,longitude} == coords.latitude, coords.longitude
         this.setState({ isLoading: false });
      } catch (error) {
         Alert.alert("can't find U", "So sada");
      }
   };
   componentDidMount() {
      this.gerLocation();
   }
   render() {
      const { isLoading } = this.state;
      return isLoading ? <Loading></Loading> : null;
   }
}
