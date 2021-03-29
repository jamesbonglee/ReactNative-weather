import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

// export default function App() {
//    return <Loading></Loading>;
// }

export default class extends React.Component {
   gerLocation = async () => {
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
   };
   componentDidMount() {
      this.gerLocation;
   }
   render() {
      return <Loading></Loading>;
   }
}
